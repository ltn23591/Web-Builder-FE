import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    // Dummy data for projects
    const projects = [
        { id: 1, name: 'E-commerce Store', status: 'Published', date: '2 days ago', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80' },
        { id: 2, name: 'Portfolio Template', status: 'Draft', date: '5 days ago', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
        { id: 3, name: 'SaaS Landing Page', status: 'Published', date: '1 week ago', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
            <NavBar />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">My Projects</h1>
                        <p className="text-slate-400">Manage and edit your AI-generated websites.</p>
                    </div>
                    <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                        New Project
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-slate-900 border border-white/5 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                <div className="absolute top-3 right-3">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md ${project.status === 'Published' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
                                <p className="text-sm text-slate-500 mb-4">Edited {project.date}</p>
                                <div className="flex gap-3">
                                    <Link to="/preview" className="flex-1 bg-white/5 hover:bg-white/10 text-center py-2 rounded-md text-sm font-medium transition-colors">Edit</Link>
                                    <button className="px-3 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-md text-slate-400 transition-colors">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MyProjects;
