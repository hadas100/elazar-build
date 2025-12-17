import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">המומחיות שלנו</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900">פתרונות בנייה ושיפוץ מתקדמים</h3>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-primary-500"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">{service.title}</h4>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
