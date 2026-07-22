import React, { useState } from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  initialProject?: ProjectItem;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  initialProject,
  onClose,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem>(initialProject || PROJECTS[0]);

  if (!isOpen) return null;

  const categories = ['All', 'Windows', 'Doors', 'Bi-fold Doors', 'Conservatories'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#121417] border border-white/20 shadow-2xl text-white overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#181b1f] border-b border-white/10 shrink-0">
          <div>
            <h3 className="text-lg font-bold font-['Outfit']">Project Showcase Gallery</h3>
            <p className="text-xs text-gray-400">Glazing installations across Leicestershire</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 p-4 bg-[#141619] border-b border-white/10 overflow-x-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#dfd7c6] text-[#111214]'
                  : 'bg-[#1e2126] text-gray-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal Main Content (Split Preview + Grid) */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Active Featured Project */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#181b1f] border border-white/10 p-4">
            <div className="md:col-span-7 h-64 sm:h-80 overflow-hidden bg-black">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#dfd7c6] mb-2 font-semibold">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{activeProject.category}</span>
                  <span>•</span>
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeProject.location}</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white mb-3">
                  {activeProject.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-normal mb-4">
                  {activeProject.description}
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full py-3 bg-[#dfd7c6] text-[#111214] font-semibold text-xs uppercase tracking-wider hover:bg-[#ece5d6]"
              >
                Request Similar Quote
              </button>
            </div>
          </div>

          {/* Grid Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`h-24 overflow-hidden border cursor-pointer transition-all ${
                  activeProject.id === proj.id
                    ? 'border-[#dfd7c6] ring-2 ring-[#dfd7c6]/50'
                    : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
