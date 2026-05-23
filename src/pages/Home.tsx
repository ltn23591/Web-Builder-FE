import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2Icon } from 'lucide-react';
import NavBar from '../components/NavBar';

const Home = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log('User input:', input);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/preview');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
            <NavBar />
            
            <section className="relative flex flex-col items-center text-white pb-20 px-4 pt-16">
                {/* BACKGROUND IMAGE / GRADIENT */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute top-0 w-full opacity-60 mix-blend-screen pointer-events-none -z-10" alt="" />

                <a href="#" className="flex items-center gap-2 border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm rounded-full p-1 pr-3 text-sm hover:bg-slate-800/60 transition">
                    <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full font-medium">NEW</span>
                    <p className="flex items-center gap-2">
                        <span className="text-slate-300">Try 30 days free trial option</span>
                        <svg className="mt-px text-slate-400" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </p>
                </a>

                <h1 className="text-center text-[40px] leading-[1.1] md:text-6xl md:leading-[1.15] mt-8 font-bold max-w-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    Turn thoughts into websites instantly, with AI.
                </h1>

                <p className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mt-6">
                    Create, customize, and deploy faster than ever with intelligent design powered by artificial intelligence.
                </p>

                <form onSubmit={onSubmitHandler} className="bg-white/[0.03] backdrop-blur-xl max-w-3xl w-full rounded-2xl p-4 mt-12 border border-white/10 shadow-2xl focus-within:border-indigo-500/50 focus-within:ring-4 ring-indigo-500/10 transition-all duration-300">
                    <textarea 
                        onChange={e => setInput(e.target.value)} 
                        className="bg-transparent outline-none text-slate-200 resize-none w-full text-lg placeholder:text-slate-500/70 p-2" 
                        rows={4} 
                        placeholder="Describe the website you want to build in detail..." 
                        required 
                    />
                    <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-4">
                        <div className="flex gap-2 text-slate-500">
                            <button type="button" className="p-2 hover:bg-white/5 rounded-lg transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
                            <button type="button" className="p-2 hover:bg-white/5 rounded-lg transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></button>
                        </div>
                        <button disabled={loading} className="flex items-center justify-center min-w-[150px] gap-2 bg-white text-black font-medium hover:bg-slate-200 rounded-lg px-6 py-2.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                            {!loading ? 'Generate Site' : (
                                <><Loader2Icon className='animate-spin size-4 text-black' /> Building...</>
                            )}
                        </button>
                    </div>
                </form>

                <div className="w-full max-w-5xl mx-auto mt-24">
                    <p className="text-center text-sm text-slate-500 font-medium mb-8 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <img className="max-w-24 md:max-w-32 h-8 object-contain" src="https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" alt="Framer" />
                        <img className="max-w-24 md:max-w-32 h-8 object-contain" src="https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" alt="Huawei" />
                        <img className="max-w-24 md:max-w-32 h-8 object-contain" src="https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" alt="Instagram" />
                        <img className="max-w-24 md:max-w-32 h-8 object-contain" src="https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" alt="Microsoft" />
                        <img className="max-w-24 md:max-w-32 h-8 object-contain" src="https://saasly.prebuiltui.com/assets/companies-logo/google.svg" alt="Google" />
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-24 px-4 bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for speed. Built for scale.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to build stunning websites without writing a single line of code. Let our AI do the heavy lifting.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">AI Generation</h3>
                            <p className="text-slate-400">Describe what you want and watch as our AI generates a complete, fully functional website in seconds.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Drag & Drop Editor</h3>
                            <p className="text-slate-400">Visually tweak the AI's output with an intuitive drag-and-drop editor. No coding required.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                            <p className="text-slate-400">Export highly optimized, production-ready code that loads blazingly fast and ranks high on SEO.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">SiteBuilder AI</span>
                    </div>
                    <p className="text-slate-500 text-sm">© 2026 SiteBuilder AI. All rights reserved.</p>
                    <div className="flex gap-4 text-slate-400">
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <a href="#" className="hover:text-white transition">GitHub</a>
                        <a href="#" className="hover:text-white transition">Discord</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
