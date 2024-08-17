import React, { useState } from 'react';

const TaskForm: React.FC<{ addTask: (name: string, project: string) => void, projects: string[] }> = ({ addTask, projects }) => {
  const [taskName, setTaskName] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName && selectedProject) {
      addTask(taskName, selectedProject);
      setTaskName('');
      setSelectedProject('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="input"
      />
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="select ml-2"
      >
        <option value="">Select Project</option>
        {projects.map((project, index) => (
          <option key={index} value={project}>{project}</option>
        ))}
      </select>
      <button type="submit" className="button button-secondary ml-2">Add Task</button>
    </form>
  );
};

export default TaskForm;
