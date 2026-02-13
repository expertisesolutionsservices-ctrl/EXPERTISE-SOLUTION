import React, { useState } from 'react';
import { Send, CheckCircle, Briefcase, User, FileCheck, Mail } from 'lucide-react';

export const VendorRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100 text-center max-w-lg w-full animate-fade-in">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for applying. Our talent acquisition team will review your credentials and contact you if your profile matches our current needs.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:Business@expertisesol.com"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-4 rounded-lg border border-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Mail us: Business@expertisesol.com
            </a>
            
            <button 
              onClick={() => setSubmitted(false)}
              className="text-slate-400 font-semibold hover:text-slate-600 transition-colors text-sm mt-2"
            >
              Submit another application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section - Consistent with Home/Services/Contact */}
      <div className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
           <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in">Vendor Portal</span>
           <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight animate-fade-up">Join Our Network</h1>
           <p className="text-lg text-slate-400 max-w-2xl mx-auto animate-fade-up delay-100">
             We collaborate with world-class linguists, annotators, and media professionals. Complete the profile below to get started.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-12 pb-24 relative z-10 animate-fade-up delay-200">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Form Header */}
            <div className="bg-slate-900 px-8 py-6 flex items-center justify-between border-b border-slate-800">
               <div className="flex items-center gap-3 text-white">
                 <Briefcase size={20} className="text-blue-400" />
                 <span className="font-semibold tracking-wide">Vendor Application</span>
               </div>
               <div className="text-slate-400 text-sm">Secure Form</div>
            </div>
            
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Section 1 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                    <User size={20} className="text-blue-600" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Company Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                    <FileCheck size={20} className="text-blue-600" /> Professional Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Contact Number <span className="text-red-500">*</span></label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700">Primary Expertise <span className="text-red-500">*</span></label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                        <option value="">Select...</option>
                        <option value="data">AI Data & Annotation</option>
                        <option value="translation">Translation & Localization</option>
                        <option value="media">Subtitling & Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-8">
                    <label className="block text-sm font-semibold text-slate-700">Experience Summary <span className="text-red-500">*</span></label>
                    <textarea required rows={4} placeholder="Briefly describe your relevant projects and years of experience..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"></textarea>
                  </div>

                  <div className="space-y-2 mt-8">
                    <label className="block text-sm font-semibold text-slate-700">LinkedIn Profile</label>
                    <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1">
                    Submit Application <Send size={20} />
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-6">
                    By submitting, you consent to Expertise Solutions processing your data for recruitment purposes.
                  </p>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};