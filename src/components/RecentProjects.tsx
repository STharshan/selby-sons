import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

interface RecentProjectsProps {
  onOpenGallery: (project?: ProjectItem) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onOpenGallery }) => {
  const displayedProjects = PROJECTS.slice(0, 5);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#121417] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle */}
        <div data-aos="fade-up" className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#dfd7c6] uppercase font-['Outfit']">
            RECENT PROJECTS
          </span>
        </div>

        {/* 6 Grid layout (5 image thumbnails + 1 dark View full gallery card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={idx * 80}
              onClick={() => onOpenGallery(project)}
              className="group relative h-64 sm:h-72 overflow-hidden bg-[#1c1f24] border border-white/10 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-black/60 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-[#dfd7c6]" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#dfd7c6] uppercase block">
                    {project.category} • {project.location}
                  </span>
                  <h4 className="text-sm font-bold text-white font-['Outfit'] leading-tight mt-1 group-hover:text-[#dfd7c6] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: "View full gallery" */}
          <div
            data-aos="zoom-in"
            data-aos-delay={400}
            onClick={() => onOpenGallery()}
            className="group h-64 sm:h-72 bg-[#181a1e] border border-white/10 hover:border-[#dfd7c6] transition-all duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors mb-4">
              View full gallery
            </span>
            <div className="w-10 h-10 rounded-full bg-[#dfd7c6] text-[#111214] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
