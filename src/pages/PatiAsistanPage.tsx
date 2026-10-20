import React, { useState, useEffect, useRef } from 'react';
import { useDog } from '@/context/DogContext';
import { client } from '@/lib/atomsClient';
import { dataEntities } from '@/lib/data/entities';
import { AssistantMessageEntity } from '@/lib/data/types';
import { DisclaimerBar } from '@/components/common/Ui';
import { 
  Send, 
  RotateCcw, 
  AlertTriangle
} from 'lucide-react';

export const PatiAsistanPage: React.FC = () => {
  const { activeDog } = useDog();
  const dogName = activeDog?.name || 'Kuçu';

  const [messages, setMessages] = useState<AssistantMessageEntity[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const stored = await dataEntities.messages.list();
      if (stored.length > 0) {
        setMessages(stored);
      } else {
        const welcome: AssistantMessageEntity = {
          id: 'msg_welcome',
          sender: 'assistant',
          text: `Merhaba! Ben PatiAsistan 🐾. ${dogName}'in psikolojisi, beden dili, sakinleşme sinyalleri ve pozitif pekiştirme eğitimi konularında bilimsel rehberlik etmek için buradayım.\n\nBugün nasıl bir davranış gözlemlediniz?`,
          timestamp: 'BAŞLANGIÇ'
        };
        setMessages([welcome]);
        dataEntities.messages.save([welcome]);
      }
    };
    loadMessages();
  }, [dogName]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  const quickPrompts = [
    'Kuyruğunu daha çok sola sallıyor, ne anlama gelir?',
    'Evde yalnız kalamıyor, ağlıyor. Ne yapmalıyım?',
    'Yavrum ellerimi ve paçalarımı çok sert ısırıyor.',
    'Sokakta diğer köpekleri görünce donup kalıyor.',
    'Mama kabına yaklaşınca hafifçe hırlıyor.'
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || isStreaming) return;

    const userMsg: AssistantMessageEntity = {
      id: 'usr_' + Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    };

    const updatedWithUser = [...messages, userMsg];
    setMessages(updatedWithUser);
    setInput('');
    setIsStreaming(true);

    const assistantMsgId = 'ast_' + Date.now().toString();
    const initialAssistantMsg: AssistantMessageEntity = {
      id: assistantMsgId,
      sender: 'assistant',
      text: '',
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true
    };

    setMessages([...updatedWithUser, initialAssistantMsg]);

    await client.ai.chatStream(
      textToSend,
      dogName,
      (chunk) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsgId ? { ...m, text: chunk } : m
          )
        );
      },
      (fullText) => {
        const finalMessages = updatedWithUser.concat({
          id: assistantMsgId,
          sender: 'assistant',
          text: fullText,
          timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
          isStreaming: false
        });
        setMessages(finalMessages);
        dataEntities.messages.save(finalMessages);
        setIsStreaming(false);
      }
    );
  };

  const handleClear = async () => {
    await dataEntities.messages.clear();
    const welcome: AssistantMessageEntity = {
      id: 'msg_welcome_' + Date.now().toString(),
      sender: 'assistant',
      text: `Sohbet geçmişi sıfırlandı. ${dogName} hakkında sormak istediğiniz yeni bir konuyu yazabilirsiniz. 🐾`,
      timestamp: 'BAŞLANGIÇ'
    };
    setMessages([welcome]);
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-5 bg-white dark:bg-zinc-900 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center font-black text-lg">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black uppercase text-black dark:text-white">
                PATİASİSTAN AI DANIŞMANI
              </h1>
              <span className="font-mono text-[10px] font-bold uppercase bg-green-600 text-white px-2 py-0.5 border border-black">
                STREAMING AKTİF
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {dogName} için 7/24 bilimsel etoloji ve pozitif pekiştirme yapay zeka rehberi
            </p>
          </div>
        </div>

        <button
          onClick={handleClear}
          className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 font-mono text-xs font-black uppercase shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>GEÇMİŞİ SIFIRLA</span>
        </button>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Chat Area */}
      <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-xl dark:shadow-brutal-white-xl flex flex-col h-[600px]">
        
        {/* Messages Stream Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-zinc-50 dark:bg-zinc-950">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 border-2 border-black dark:border-white flex items-center justify-center font-mono text-xs font-black shrink-0 ${
                  isUser ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-red-600 text-white'
                }`}>
                  {isUser ? 'SEN' : '🐾'}
                </div>

                <div className={`max-w-[85%] sm:max-w-[75%] p-4 border-2 border-black dark:border-white text-xs sm:text-sm font-bold leading-relaxed space-y-2 ${
                  isUser
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-brutal'
                    : 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-brutal'
                }`}>
                  <p className="whitespace-pre-line font-medium">{m.text}</p>
                  
                  {m.isStreaming && (
                    <span className="inline-block w-2 h-4 bg-red-600 animate-pulse ml-1 align-middle" />
                  )}

                  {!isUser && (
                    <div className="pt-2 border-t border-black/20 dark:border-white/20 text-[10px] text-zinc-600 dark:text-zinc-400 font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                      <span>Genel etolojik rehberdir. Isırma ve şiddetli korkuda profesyonel destek alınız.</span>
                    </div>
                  )}

                  <div className="font-mono text-[10px] font-black uppercase text-right opacity-60">
                    {m.timestamp}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={endRef} />
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-3 border-t-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 overflow-x-auto flex gap-2">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={isStreaming}
              className="font-mono text-xs font-bold uppercase whitespace-nowrap px-3 py-1.5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-yellow-400 hover:text-black transition-all cursor-pointer disabled:opacity-50"
            >
              💬 {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t-2 border-black dark:border-white bg-white dark:bg-zinc-900 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isStreaming}
            placeholder={`${dogName} ile ilgili bir soru sorun veya gözlemlediğiniz durumu anlatın...`}
            className="flex-1 h-[44px] px-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs sm:text-sm font-bold uppercase focus:outline-hidden disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className="h-[44px] px-4 border-2 border-black dark:border-white bg-red-600 text-white font-mono text-xs font-black uppercase shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50 shrink-0 flex items-center gap-1.5"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
