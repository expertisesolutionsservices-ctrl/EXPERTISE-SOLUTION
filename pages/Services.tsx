import React from 'react';
import { 
  Video, Database, FileText, Globe, Languages, Mic, Type, 
  MonitorPlay, LayoutTemplate, ArrowRight
} from 'lucide-react';
import { ServiceDetail } from '../types';

const services: ServiceDetail[] = [
  {
    id: 'video-annotation',
    category: 'AI & Data',
    title: 'Video Annotation',
    description: 'High‑precision frame‑by‑frame labeling for real‑world intelligence.',
    icon: Video,
    features: ['Frame‑by‑frame labeling', 'Object detection & tracking', 'Semantic & instance segmentation'],
    useCases: 'Autonomous driving, smart surveillance'
  },
  {
    id: 'ai-training-data',
    category: 'AI & Data',
    title: 'AI Training Data',
    description: 'Curated datasets that make models reliable, fair, and benchmark‑ready.',
    icon: Database,
    features: ['Multilingual datasets', 'Prompt engineering', 'Bias analysis & data balancing'],
    useCases: 'LLMs, Generative AI'
  },
  {
    id: 'data-collection',
    category: 'AI & Data',
    title: 'Data Collection',
    description: 'From raw signals to validated datasets—at scale.',
    icon: FileText,
    features: ['Custom data sourcing', 'Gold‑standard creation', 'IAA Validation'],
    useCases: 'Speech recognition, OCR'
  },
  {
    id: 'translation',
    category: 'Language',
    title: 'Translation & Localization',
    description: 'Native‑quality translations that sound local—everywhere (230+ Languages).',
    icon: Globe,
    features: ['TEP (Translation, Editing, Proofreading)', 'Style‑guide adherence', 'Secure version control'],
    useCases: 'Software, Marketing, Legal'
  },
  {
    id: 'mtpe',
    category: 'Language',
    title: 'MTPE (Human-in-the-Loop)',
    description: 'Speed of MT combined with the accuracy of experts.',
    icon: Languages,
    features: ['Faster releases', 'Controlled quality thresholds', 'Continuous feedback loops'],
    useCases: 'E-commerce, Support content'
  },
  {
    id: 'transcription',
    category: 'Language',
    title: 'Transcription & Interpretation',
    description: 'Accurate audio-to-text and live communication support.',
    icon: Mic,
    features: ['Time-coded transcriptions', 'Speaker identification', 'Simultaneous interpretation'],
    useCases: 'Medical, Legal, Events'
  },
  {
    id: 'subtitling',
    category: 'Media',
    title: 'Subtitling & Captioning',
    description: 'Broadcast‑quality accessibility built to platform specs.',
    icon: Type,
    features: ['SDH subtitles', 'Platform compliance (Netflix, etc.)', 'WCAG alignment'],
    useCases: 'Streaming, Broadcast'
  },
  {
    id: 'dubbing',
    category: 'Media',
    title: 'Dubbing & Voice‑Over',
    description: 'Voices that resonate with your audience.',
    icon: MonitorPlay,
    features: ['Native voice casting', 'Lip‑sync or UN‑style', 'Studio‑grade mixing'],
    useCases: 'Entertainment, E-learning'
  },
  {
    id: 'dtp',
    category: 'Media',
    title: 'Desktop Publishing (DTP)',
    description: 'Perfect typography in every language.',
    icon: LayoutTemplate,
    features: ['Multilingual Typesetting', 'RTL/LTR layouts', 'Print-ready files'],
    useCases: 'Manuals, Marketing collateral'
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header with Consistent Tone */}
      <div className="bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
           <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">End-to-End Solutions</span>
           <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight animate-fade-up">Our Capabilities</h1>
           <p className="text-xl text-slate-400 animate-fade-up delay-100">
             Scalable workflows designed for the world's most demanding AI and media companies.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-12 pb-24 relative z-10">
        {/* Categories Loop */}
        {['AI & Data', 'Language', 'Media'].map((cat) => (
          <div key={cat} className="mb-20 animate-fade-up delay-200">
             <div className="flex items-center gap-4 mb-8">
               <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
               <h2 className="text-2xl font-bold text-slate-900">{cat} Solutions</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.filter(s => s.category === cat).map((service) => (
                 <div key={service.id} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-slate-50 text-slate-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <service.icon size={24} />
                      </div>
                      <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                    
                    <div className="pt-6 border-t border-slate-50">
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                       <ul className="space-y-2">
                         {service.features?.map((f, i) => (
                           <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                             <span className="w-1 h-1 rounded-full bg-blue-500 mt-2"></span>
                             {f}
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};