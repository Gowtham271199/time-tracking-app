import React from 'react';

interface TimeEntry {
  startTime: Date;
  endTime?: Date;
  duration?: number;
}

const TimeEntryList: React.FC<{ entries: TimeEntry[] }> = ({ entries }) => {
  return (
    <div className="card p-4">
      {entries.map((entry, index) => (
        <div key={index} className="p-2 border-b">
          <div>Start Time: {entry.startTime.toLocaleString()}</div>
          {entry.endTime && <div>End Time: {entry.endTime.toLocaleString()}</div>}
          {entry.duration && <div>Duration: {entry.duration} seconds</div>}
        </div>
      ))}
    </div>
  );
};

export default TimeEntryList;
