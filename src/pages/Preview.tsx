import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Preview = () => {
    const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

    return (
        <div className="flex flex-col h-screen bg-slate-950 font-sans">
            {/* Editor Top Bar */}
            <header className="h-14 flex items-center justify-between px-4 border-b border-white/10 bg-slate-900 shrink-0">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-slate-400 hover:text-white transition">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <span className="text-sm font-medium text-slate-200">SaaS Landing Page - Draft</span>
                </div>

                {/* Viewport Toggles */}
                <div className="flex items-center bg-slate-950 rounded-lg p-1 border border-white/5">
                    <button 
                        onClick={() => setViewMode('desktop')}
                        className={`p-1.5 rounded-md transition ${viewMode === 'desktop' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                    </button>
                    <button 
                        onClick={() => setViewMode('tablet')}
                        className={`p-1.5 rounded-md transition ${viewMode === 'tablet' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
                    </button>
                    <button 
                        onClick={() => setViewMode('mobile')}
                        className={`p-1.5 rounded-md transition ${viewMode === 'mobile' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 transition">Share</button>
                    <button className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md transition">Publish</button>
                </div>
            </header>

            {/* Main Editor Area */}
            <div className="flex flex-1 overflow-hidden bg-slate-950">
                {/* Left Sidebar - AI Chat/Tools */}
                <aside className="w-80 border-r border-white/5 bg-slate-900/50 flex flex-col hidden lg:flex">
                    <div className="p-4 border-b border-white/5">
                        <h2 className="text-sm font-semibold text-white">AI Assistant</h2>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        <div className="bg-white/5 rounded-lg p-3 text-sm text-slate-300">
                            I've generated the initial layout for your SaaS landing page. What would you like to tweak?
                        </div>
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 text-sm text-indigo-200 self-end ml-8">
                            Make the hero section darker and add a subtle gradient.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span></span>
                            Applying changes...
                        </div>
                    </div>
                    <div className="p-4 border-t border-white/5 bg-slate-900">
                        <div className="relative">
                            <input type="text" placeholder="Ask AI to change anything..." className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-indigo-400 hover:text-indigo-300 transition">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Canvas Area */}
                <main className="flex-1 overflow-auto flex items-center justify-center p-4 md:p-8 relative design-canvas">
                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Simulated Browser/Device Frame */}
                    <div 
                        className={`bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-500 relative z-10 border border-slate-800 ring-1 ring-white/10 flex flex-col`}
                        style={{
                            width: viewMode === 'desktop' ? '100%' : viewMode === 'tablet' ? '768px' : '375px',
                            height: '100%',
                            maxWidth: viewMode === 'desktop' ? '1200px' : 'none',
                        }}
                    >
                        {/* Fake Browser Chrome */}
                        <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-1.5 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="flex-1 flex justify-center">
                                <div className="bg-white rounded-md h-5 px-4 text-[10px] text-slate-500 flex items-center shadow-sm border border-slate-200 w-1/2 justify-center truncate">
                                    preview.yoursite.com
                                </div>
                            </div>
                        </div>

                        {/* Generated Content Placeholder */}
                        <div className="flex-1 overflow-y-auto bg-white p-8">
                            <div className="animate-pulse space-y-12">
                                {/* Nav Skeleton */}
                                <div className="flex justify-between items-center pb-8 border-b">
                                    <div className="h-6 w-24 bg-slate-200 rounded"></div>
                                    <div className="flex gap-4">
                                        <div className="h-4 w-16 bg-slate-100 rounded hidden md:block"></div>
                                        <div className="h-4 w-16 bg-slate-100 rounded hidden md:block"></div>
                                        <div className="h-4 w-16 bg-slate-100 rounded hidden md:block"></div>
                                    </div>
                                    <div className="h-8 w-20 bg-indigo-100 rounded"></div>
                                </div>
                                {/* Hero Skeleton */}
                                <div className="flex flex-col items-center pt-10 text-center space-y-6">
                                    <div className="h-14 w-3/4 bg-slate-200 rounded-lg"></div>
                                    <div className="h-14 w-1/2 bg-slate-200 rounded-lg"></div>
                                    <div className="h-4 w-2/3 bg-slate-100 rounded mt-4"></div>
                                    <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                                    <div className="h-12 w-40 bg-indigo-500 rounded-lg mt-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Preview;
