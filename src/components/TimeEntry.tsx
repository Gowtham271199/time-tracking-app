import React, { useState } from 'react';

interface TimeEntryFormProps {
  taskId: string;
  onAddTimeEntry: (entry: TimeEntry) => void;
}

interface TimeEntry {
  startTime: Date;
  endTime?: Date;
  duration?: number;
}

const TimeEntryForm: React.FC<TimeEntryFormProps> = ({ onAddTimeEntry }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const handleStart = () => {
    setStartTime(new Date());
    setIsTracking(true);
  };

  const handleStop = () => {
    if (startTime) {
      const endTime = new Date();
      const duration = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
      const entry: TimeEntry = {
        startTime,
        endTime,
        duration,
      };
      onAddTimeEntry(entry);
      setIsTracking(false);
    }
  };

  return (
    <div>
      {isTracking ? (
        <button onClick={handleStop} className="bg-red-500 text-white p-2 rounded">
          Stop
        </button>
      ) : (
        <button onClick={handleStart} className="bg-green-500 text-white p-2 rounded">
          Start
        </button>
      )}
    </div>
  );
};

export default TimeEntryForm;
