import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, ArrowRight, CheckCircle, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section - Consistent with Home/Services */}
      <div className="bg-slate-950 text-white pt-32 pb-32 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
         
         <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
           <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Get In Touch</span>
           <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight animate-fade-up">Let's build something <br className="hidden md:block"/>extraordinary.</h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-up delay-100">
             Partner with our expert teams to accelerate your AI roadmap or expand your global reach.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-20 pb-24 relative z-10 animate-fade-up delay-200">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left - Contact Info (Dark) */}
            <div className="lg:w-5/12 bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                     <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                     <div className="space-y-8">
                       <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-blue-400">
                           <MapPin size={24} />
                         </div>
                         <div>
                           <h4 className="font-bold text-lg mb-1">Global HQ</h4>
                           <p className="text-slate-400 text-sm leading-relaxed">
                             9-165/6/3, Hitech City,<br/>
                             Raheja Mindspace, Madhapur,<br/>
                             Hyderabad, Telangana – 500081
                           </p>
                         </div>
                       </div>

                       <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 text-blue-400">
                           <Mail size={24} />
                         </div>
                         <div>
                           <h4 className="font-bold text-lg mb-1">Business Inquiries</h4>
                           <a href="mailto:business@expertisesol.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                             business@expertisesol.com
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                     <h3 className="font-bold mb-2 flex items-center gap-2">
                       <MessageSquare size={18} className="text-green-400" /> Vendor?
                     </h3>
                     <p className="text-sm text-slate-400 mb-4">Join our global network of linguists and annotators.</p>
                     <a href="#/vendor" className="text-white text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                       Apply Here <ArrowRight size={16} />
                     </a>
                   </div>
                 </div>
            </div>

            {/* Right - Form */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
                 {submitted ? (
                   <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-8">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent</h3>
                      <p className="text-slate-600 mb-8 max-w-md">
                        Thanks for reaching out! Our team will get back to you within 24 hours.
                      </p>
                      
                      <div className="w-full max-w-md space-y-4">
                        <a 
                          href="https://calendly.com/expertisesolutions-services/30min"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
                        >
                          <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                          Schedule a quick call
                        </a>

                        <a 
                          href="mailto:Business@expertisesol.com"
                          className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-4 rounded-lg border border-slate-200 transition-all flex items-center justify-center gap-2"
                        >
                          <Mail size={20} />
                          Mail us: Business@expertisesol.com
                        </a>
                      </div>

                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-slate-400 font-semibold hover:text-slate-600 transition-colors text-sm mt-6"
                      >
                        Send another message
                      </button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                     <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a message</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                         <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-sm font-semibold text-slate-700">Last Name</label>
                         <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                       </div>
                     </div>

                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                       <input required type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                     </div>

                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">Service Interest</label>
                       <div className="relative">
                         <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none text-slate-600">
                            <option>Select a service...</option>
                            <option>AI Training Data</option>
                            <option>Localization</option>
                            <option>Media Production</option>
                            <option>Other</option>
                         </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                           <ArrowRight size={16} className="rotate-90" />
                         </div>
                       </div>
                     </div>

                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">Project Details <span className="text-red-500">*</span></label>
                       <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"></textarea>
                     </div>

                     <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                       Submit Request
                     </button>
                   </form>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
};