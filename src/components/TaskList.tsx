import React from 'react';

const TaskList: React.FC<{ tasks: { name: string, project: string }[] }> = ({ tasks }) => {
  return (
    <div className="card">
      {tasks.map((task, index) => (
        <div key={index} className="p-2 border-b">
          {task.name} ({task.project})
        </div>
      ))}
    </div>
  );
};

export default TaskList;
