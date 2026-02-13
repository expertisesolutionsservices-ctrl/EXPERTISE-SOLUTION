import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  // Ensure we start at the top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-slate-950 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
           <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Legal & Compliance</span>
           <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight animate-fade-up">Privacy Policy</h1>
           <p className="text-xl text-slate-400 animate-fade-up delay-100 max-w-2xl mx-auto">
             How Expertise Solutions collects, uses, and protects your data in accordance with global standards (GDPR, ISO).
           </p>
           <p className="text-sm text-slate-500 mt-6 animate-fade-up delay-200">Last Updated: January 1, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl animate-fade-up delay-300">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 space-y-12">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Shield size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              At Expertise Solutions ("we," "our," or "us"), we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our website, services (AI Training Data, Localization, Media Services), or apply to join our vendor network.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Eye size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">We collect information to provide better services to our clients and manage our global vendor network effectively:</p>
            <ul className="space-y-3 list-disc pl-5 text-slate-600">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details when you fill out contact or registration forms.</li>
              <li><strong>Professional Information (for Vendors):</strong> Resumes, portfolios, language pairs, domain expertise, and payment details required for vendor onboarding.</li>
              <li><strong>Project Data:</strong> Text, audio, video, and image files provided by clients for annotation, transcription, or translation purposes.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP addresses, browser types, and page visit history.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FileText size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">Your data is utilized for the following specific purposes:</p>
            <ul className="space-y-3 list-disc pl-5 text-slate-600">
              <li>To deliver contracted services (e.g., delivering annotated datasets or localized content).</li>
              <li>To evaluate and onboard linguists, annotators, and voice talents into our vendor database.</li>
              <li>To communicate with you regarding project updates, quotes, or service changes.</li>
              <li>To ensure compliance with legal obligations and quality standards (ISO 9001:2015).</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Lock size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">4. Data Security & Protection</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We implement enterprise-grade security measures to safeguard your data. This includes encryption (SSL/TLS), secure file transfer protocols (SFTP), strict access controls, and regular security audits. For AI training data projects, we adhere to strict non-disclosure agreements (NDAs) and can anonymize PII (Personally Identifiable Information) upon request.
            </p>
          </section>

          <section>
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Globe size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">5. Your Data Rights (GDPR Compliance)</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights under GDPR:
            </p>
            <ul className="space-y-3 list-disc pl-5 text-slate-600">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
            <p className="text-slate-600 mt-4">
              To exercise these rights, please contact our Data Protection Officer at <a href="mailto:business@expertisesol.com" className="text-blue-600 font-semibold hover:underline">business@expertisesol.com</a>.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Server size={24} /></div>
              <h2 className="text-2xl font-bold text-slate-900">6. Third-Party Sharing</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners. For project execution, data may be shared with trusted vendors who are bound by strict confidentiality agreements.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
            <p className="font-semibold text-slate-800">Expertise Solutions</p>
            <p className="text-slate-600">Hitech City, Hyderabad, Telangana – 500081</p>
            <p className="text-slate-600">Email: <a href="mailto:business@expertisesol.com" className="text-blue-600 hover:underline">business@expertisesol.com</a></p>
          </section>

        </div>
      </div>
    </div>
  );
};