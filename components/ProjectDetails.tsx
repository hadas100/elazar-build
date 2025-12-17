import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowRight, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import Contact from './Contact';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Navigation Bar / Back Button */}
      <div className="bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-secondary-600 hover:text-primary-600 font-medium transition-colors"
          >
            <ArrowRight size={20} className="ml-2" />
            חזרה לכל הפרויקטים
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              {project.fullDescription || project.description}
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 mb-8">
              <h3 className="font-bold text-lg mb-4 text-secondary-900">פרטי הפרויקט</h3>
              <div className="space-y-3">
                <div className="flex items-center text-secondary-600">
                  <CheckCircle2 size={18} className="text-primary-500 ml-3" />
                  <span>רמת גימור פרימיום</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <CheckCircle2 size={18} className="text-primary-500 ml-3" />
                  <span>עמידה קפדנית בלוחות זמנים</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <CheckCircle2 size={18} className="text-primary-500 ml-3" />
                  <span>שימוש בחומרים בעלי תו תקן</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 border-r-4 border-primary-500 pr-4">
              גלריית תמונות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-80 group">
                  <img 
                    src={img} 
                    alt={`${project.title} - תמונה ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Section Reuse */}
      <div className="bg-secondary-50 border-t border-secondary-200">
        <Contact />
      </div>
    </div>
  );
};

export default ProjectDetails;
