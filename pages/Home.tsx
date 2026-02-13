import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, Globe2, Layers, 
  Cpu, Award, ChevronRight, BarChart3
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      
      {/* Hero Section - Dark Premium Theme */}
      <section className="relative bg-slate-950 text-white min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Enterprise Grade Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Scale AI. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Speak Global.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                The trusted partner for high-precision AI training data, native-quality localization, and frame-perfect media services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
                >
                  Explore Capabilities <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-700"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue-500" /> ISO Certified
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={18} className="text-blue-500" /> 230+ Languages
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-blue-500" /> 99.9% Uptime
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in delay-200">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80" 
                    alt="AI Visualization" 
                    className="w-full h-auto opacity-80"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-xs uppercase tracking-wider">Project Accuracy</span>
                      <span className="text-green-400 text-xs font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-green-400 w-[99.8%] h-full rounded-full"></div>
                    </div>
                  </div>
               </div>
               
               {/* Floating Element */}
               <div className="absolute -bottom-10 -left-10 bg-white text-slate-900 p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 max-w-xs animate-bounce-slow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Human-in-the-Loop</h4>
                      <p className="text-xs text-slate-500">Expert Verification</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 italic">"Combining AI speed with human nuance."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Global Languages", value: "230+" },
              { label: "Data Points", value: "50M+" },
              { label: "Client Satisfaction", value: "98%" }
            ].map((metric, i) => (
              <div key={i} className="py-8 text-center group hover:bg-slate-50 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{metric.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Core Competencies</h4>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Precision in every pixel and syllable.</h2>
            </div>
            <Link to="/services" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-4 transition-all border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Data Services</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">High-fidelity training data for computer vision and LLMs. From bounding boxes to semantic segmentation.</p>
                <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Video Annotation
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Data Collection
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> RLHF
                  </li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-indigo-600 font-bold text-sm hover:underline">
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <Globe2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Localization</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Native-quality translation and cultural adaptation for global markets. 230+ languages supported.</p>
                <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Translation & TEP
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> MTPE
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Interpretation
                  </li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline">
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-pink-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pink-200">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Media Services</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Broadcast-quality subtitling, dubbing, and accessibility services designed for streaming platforms.</p>
                <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Subtitling (SDH)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Voice-Over
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Transcription
                  </li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-pink-600 font-bold text-sm hover:underline">
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 skew-y-3 origin-bottom-right translate-y-24 scale-110"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

             <div className="max-w-3xl relative">
               <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to deploy?</h2>
               <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                 Whether you need 10,000 hours of annotated video or localization for a 50-market launch, our scalable pipelines are ready.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-center">
                   Get a Custom Quote
                 </Link>
                 <Link to="/vendor" className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all text-center">
                   Join as Vendor
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};