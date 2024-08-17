import React from 'react';

interface ProjectListProps {
  projects: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="card">
      {projects.map((project, index) => (
        <div key={index} className="p-2 border-b">
          {project}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
