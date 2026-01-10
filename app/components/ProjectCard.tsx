'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
      {imageUrl && (
        <div className="w-full h-48 bg-gradient-to-br from-red-900/20 to-red-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-white/30 text-sm">Project Image</div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
        {title}
      </h3>
      <p className="text-white/70 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
          >
            View Project
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg border border-white/20 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
