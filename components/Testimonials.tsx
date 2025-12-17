import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Quote size={200} />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase mb-2">לקוחות מספרים</h2>
          <h3 className="text-3xl md:text-4xl font-bold">הממליצים שלנו</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary-800 p-8 rounded-2xl relative">
              <div className="absolute -top-4 right-8 bg-primary-600 rounded-full p-2">
                 <Quote size={20} className="text-white fill-current" />
              </div>
              <p className="text-secondary-300 mb-6 italic leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center border-t border-secondary-700 pt-4">
                <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center text-xl font-bold">
                    {testimonial.name[0]}
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <span className="text-sm text-secondary-400">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
