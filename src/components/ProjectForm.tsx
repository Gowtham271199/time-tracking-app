import React, { useState } from 'react';

const ProjectForm: React.FC<{ addProject: (name: string) => void }> = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectName) {
      addProject(projectName);
      setProjectName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        className="border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Add Project</button>
    </form>
  );
};

export default ProjectForm;
