import React from 'react';
import { Check, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="md:w-2/5 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/id/1074/800/1000" 
              alt="Civil Engineer Portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
          </div>
          
          {/* Content Side */}
          <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2">About The Engineer</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Eng. James Anderson</h2>
              <p className="text-xl text-slate-500 font-medium">Senior Civil Engineer & Project Manager</p>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              With over 15 years of experience in the construction industry, James has led numerous high-profile residential and commercial projects. His philosophy is simple: integrity in design, transparency in cost, and excellence in execution. He holds a Master’s in Structural Engineering and is a licensed surveyor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Licensed Civil Engineer', 'Certified Land Surveyor', 'Green Building Expert', 'Project Mgmt Professional'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <div className="bg-primary-100 p-1 rounded-full">
                     <Check size={14} className="text-primary-600" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                <Mail size={18} />
                Contact Me
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                <Linkedin size={18} />
                LinkedIn
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;