import React, { useState } from 'react';
import TimeEntryForm from '../components/TimeEntry';  // Updated import based on previous code
import TimeEntryList from '../components/TimeEntryList';

interface TimeEntry {
  startTime: Date;
  endTime?: Date;
  duration?: number;
}

const TimeTrackingPage: React.FC = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  
  const handleAddTimeEntry = (entry: TimeEntry) => {
    setTimeEntries([...timeEntries, entry]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Time Tracking</h1>
      {/* Pass down the taskId and a callback to handle time entry additions */}
      <TimeEntryForm taskId="example-task-id" onAddTimeEntry={handleAddTimeEntry} />
      {/* Pass down the time entries directly */}
      <TimeEntryList entries={timeEntries} />
    </div>
  );
};

export default TimeTrackingPage;
