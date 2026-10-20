/**
 * Kuchu Web Audio API Clicker & Timer Synthesizer
 * 
 * Generates zero-latency mechanical clicker sounds and session chimes
 * entirely in client-side code without downloading any external audio files.
 * Works 100% offline in PWA.
 */

export type ClickerTone = 'classic' | 'soft' | 'double';

class ClickerAudioEngine {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  /**
   * Synthesize a single realistic mechanical click pulse
   */
  private makeClickPulse(
    ctx: AudioContext, 
    startTime: number, 
    baseFreq: number, 
    duration: number, 
    volume: number,
    type: OscillatorType = 'triangle'
  ) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Highpass/bandpass filter to give metallic snap
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(baseFreq, startTime);
    filter.Q.setValueAtTime(4, startTime);

    osc.type = type;
    osc.frequency.setValueAtTime(baseFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(100, baseFreq * 0.25), startTime + duration);

    // Ultra-fast transient envelope (<25ms)
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  /**
   * Play the clicker sound based on selected tone
   */
  public playClick(tone: ClickerTone = 'classic', volumeFactor: number = 1.0) {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const vol = Math.min(1.0, Math.max(0.1, volumeFactor));

    if (tone === 'classic') {
      // Classic metal box clicker: down-snap + rebound snap (two micro-transients 30ms apart)
      this.makeClickPulse(ctx, now, 2400, 0.016, 0.95 * vol, 'triangle');
      this.makeClickPulse(ctx, now + 0.028, 1750, 0.020, 0.70 * vol, 'square');
    } else if (tone === 'soft') {
      // Muted soft clicker for noise-sensitive, timid or fear-reactive dogs
      this.makeClickPulse(ctx, now, 850, 0.025, 0.45 * vol, 'sine');
    } else if (tone === 'double') {
      // Crisp rapid double-click
      this.makeClickPulse(ctx, now, 2800, 0.012, 0.90 * vol, 'triangle');
      this.makeClickPulse(ctx, now + 0.038, 2100, 0.015, 0.85 * vol, 'triangle');
    }

    // Haptic feedback on supported mobile devices
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(25);
      } catch {
        // Ignore vibration errors if restricted
      }
    }
  }

  /**
   * Play an end-of-session gentle chime (Arpeggiated Major Triad)
   */
  public playSessionEndChime() {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // C5, E5, G5, C6 arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, i) => {
      const startTime = now + i * 0.12;
      const duration = 0.8;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([100, 50, 150]);
      } catch {
        // Ignore
      }
    }
  }
}

export const clickerAudio = new ClickerAudioEngine();
