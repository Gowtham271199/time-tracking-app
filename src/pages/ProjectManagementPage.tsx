import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TimeEntryForm from '../components/TimeEntry'; // Updated import
import TimeEntryList from '../components/TimeEntryList';

interface TimeEntry {
  startTime: Date;
  endTime?: Date;
  duration?: number;
}

const ProjectManagementPage: React.FC = () => {
  const [projects, setProjects] = useState<string[]>([]);
  const [tasks, setTasks] = useState<{ name: string; project: string }[]>([]);
  const [timeEntries, setTimeEntries] = useState<{ [taskId: string]: TimeEntry[] }>({});

  const handleAddProject = (name: string) => {
    setProjects([...projects, name]);
  };

  const handleAddTask = (name: string, project: string) => {
    setTasks([...tasks, { name, project }]);
  };

  const handleAddTimeEntry = (taskId: string, entry: TimeEntry) => {
    setTimeEntries((prevEntries) => ({
      ...prevEntries,
      [taskId]: [...(prevEntries[taskId] || []), entry],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Project Management</h1>
      <ProjectForm addProject={handleAddProject} />
      <ProjectList projects={projects} />
      <TaskForm addTask={handleAddTask} projects={projects} />
      <TaskList tasks={tasks} />
      {tasks.map((task) => (
        <div key={task.name} className="mt-4">
          <h2 className="text-xl mb-2">Task: {task.name}</h2>
          <TimeEntryForm taskId={task.name} onAddTimeEntry={(entry) => handleAddTimeEntry(task.name, entry)} />
          <TimeEntryList entries={timeEntries[task.name] || []} />
        </div>
      ))}
    </div>
  );
};

export default ProjectManagementPage;
