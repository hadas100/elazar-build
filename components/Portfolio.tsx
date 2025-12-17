import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('הכל');

  // Extract unique categories
  const categories = ['הכל', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = activeCategory === 'הכל' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">תיק עבודות</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">פרויקטים נבחרים</h3>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            מגוון פרויקטים שביצענו לאחרונה. כל תמונה מספרת סיפור של תכנון מדויק, עבודה קשה ותוצאה מושלמת.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-secondary-900 shadow-lg cursor-pointer h-72 lg:h-80">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-primary-400 text-sm font-semibold mb-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.category}
        </span>
        <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-secondary-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 h-0 group-hover:h-auto overflow-hidden">
          {project.description}
        </p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
           <span className="inline-flex items-center text-white text-sm font-medium group-hover:text-primary-400">
             לפרטים נוספים <Plus className="mr-1" size={16} />
           </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
