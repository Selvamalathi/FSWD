import React, { useState } from "react";

function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Abi", present: false },
    { id: 2, name: "bala", present: false },
    { id: 3, name:"Selva", present: false },
    { id: 4, name: "Jeeva", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="container">
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background:Black;
        }

        .container {
          width: 400px;
          margin: 50px auto;
          background: bisque;
          
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .student {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        .student:last-child {
          border-bottom: none;
        }

        button {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: White;
        }

        .present {
          background-color: #28a745;
        }

        .absent {
          background-color: #dc3545;
        }
      `}</style>

      <h2>Attendance Tracker</h2>

      <div className="stats">
        <span>Present: {presentCount}</span>
        <span>Absent: {absentCount}</span>
      </div>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <span>{student.name}</span>
          <button
            className={student.present ? "present" : "absent"}
            onClick={() => toggleAttendance(student.id)}
          >
            {student.present ? "Present" : "Absent"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AttendanceTracker;




