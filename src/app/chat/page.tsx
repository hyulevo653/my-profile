'use client';
import AppLayout from '@/components/AppLayout';
import { FiSend, FiMoreVertical, FiSearch, FiImage, FiSmile } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

const CONVERSATIONS = [
    { id: 1, name: 'Jessica Smith', lastMessage: 'Loved your new post! 😍', time: '2m', unread: 2, online: true },
    { id: 2, name: 'Mike Johnson', lastMessage: 'Thanks for the DM!', time: '1h', unread: 0, online: false },
    { id: 3, name: 'Alex Doe', lastMessage: 'Can you check my request?', time: '3h', unread: 0, online: true },
    { id: 4, name: 'Sarah Wilson', lastMessage: 'See you soon!', time: '1d', unread: 0, online: false },
];

const INITIAL_MESSAGES = [
    { id: 1, text: 'Hey! How are you doing today?', sender: 'them', time: '10:30 AM' },
    { id: 2, text: 'I am doing great, just posted some new content! Check it out 🔥', sender: 'me', time: '10:32 AM' },
    { id: 3, text: 'Loved your new post! 😍', sender: 'them', time: '10:33 AM' },
];

const BOT_RESPONSES = [
    "That's so cool! Tell me more.",
    "I'd love to see that!",
    "You're amazing! ❤️",
    "Sent you a tip! 💸",
    "Can't wait for your next stream.",
    "Haha, you're the best.",
    "Is that exclusive content? 👀",
];

export default function ChatPage() {
    const [activeChat, setActiveChat] = useState(CONVERSATIONS[0]);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        // Add user message
        const newUserMsg = {
            id: messages.length + 1,
            text: inputText,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, newUserMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate reply delay
        setTimeout(() => {
            const randomResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
            const newBotMsg = {
                id: messages.length + 2,
                text: randomResponse,
                sender: 'them',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1500 + Math.random() * 2000); // Random delay between 1.5s and 3.5s
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <AppLayout hideContact>
            <div className="flex h-[calc(100vh-64px)] md:h-screen bg-white">

                {/* Chat List Sidebar */}
                <div className="w-full md:w-80 border-r border-neutral-200 flex flex-col">
                    <div className="p-4 border-b border-neutral-100">
                        <h2 className="text-xl font-bold mb-4">Messages</h2>
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-full pl-10 pr-4 py-2 bg-neutral-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {CONVERSATIONS.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat)}
                                className={`p-4 flex gap-3 cursor-pointer hover:bg-neutral-50 transition-colors ${activeChat.id === chat.id ? 'bg-neutral-50' : ''}`}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-neutral-200" />
                                    {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-semibold truncate">{chat.name}</h3>
                                        <span className="text-xs text-neutral-400">{chat.time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${chat.unread > 0 ? 'font-bold text-black' : 'text-neutral-500'}`}>
                                        {chat.lastMessage}
                                    </p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="min-w-[20px] h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full px-1 self-center">
                                        {chat.unread}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="hidden md:flex flex-1 flex-col">
                    {/* Header */}
                    <div className="p-4 border-b border-neutral-200 flex justify-between items-center bg-white/80 backdrop-blur-sm z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-neutral-200" />
                            <div>
                                <h3 className="font-bold">{activeChat.name}</h3>
                                <span className="text-xs text-green-500 flex items-center gap-1">
                                    {activeChat.online ? '● Online' : 'Active recently'}
                                </span>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-neutral-100 rounded-full text-neutral-500">
                            <FiMoreVertical size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[70%] rounded-2xl px-4 py-2 shadow-sm ${msg.sender === 'me'
                                    ? 'bg-primary text-white rounded-br-none'
                                    : 'bg-white text-black rounded-bl-none border border-neutral-100'
                                    }`}>
                                    <p className="text-sm">{msg.text}</p>
                                    <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-neutral-400'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-neutral-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-neutral-200 bg-white">
                        <div className="flex gap-2 items-end">
                            <button className="p-3 text-neutral-400 hover:text-primary hover:bg-neutral-100 rounded-full transition-colors">
                                <FiImage size={24} />
                            </button>
                            <div className="flex-1 bg-neutral-100 rounded-2xl flex items-center px-4 py-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent border-none focus:outline-none max-h-32"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button className="ml-2 text-neutral-400 hover:text-primary">
                                    <FiSmile size={24} />
                                </button>
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="p-3 bg-primary text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                            >
                                <FiSend size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
