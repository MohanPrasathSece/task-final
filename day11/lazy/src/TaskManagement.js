import React, { useState, Suspense, lazy } from 'react';

const Task = lazy(() => import('./task')); // Lazy load the Task component

function TaskManagement() {
  const [tasks, setTasks] = useState({
    todo: [
      { name: 'Task 1', assignedTo: 'Alice' },
      { name: 'Task 2', assignedTo: 'Bob' },
    ],
    inProgress: [{ name: 'Task 3', assignedTo: 'Charlie' }],
    done: [{ name: 'Task 4', assignedTo: 'Alice' }],
  });

  const [teamMembers] = useState(['Alice', 'Bob', 'Charlie', 'David']);
  const [taskInput, setTaskInput] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleAddTask = (column) => {
    if (!taskInput.trim() || !assignedTo) return;

    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: [...prevTasks[column], { name: taskInput, assignedTo }],
    }));

    // Reset input fields after adding the task
    setTaskInput('');
    setAssignedTo('');
  };

  const handleDeleteTask = (column, taskName) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].filter((task) => task.name !== taskName),
    }));
  };

  const handleDragStart = (event, task, sourceColumn) => {
    event.dataTransfer.setData('task', JSON.stringify(task));
    event.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const handleDrop = (event, targetColumn) => {
    event.preventDefault();
    const task = JSON.parse(event.dataTransfer.getData('task'));
    const sourceColumn = event.dataTransfer.getData('sourceColumn');

    if (sourceColumn !== targetColumn) {
      setTasks((prevTasks) => {
        const updatedSource = prevTasks[sourceColumn].filter(
          (t) => t.name !== task.name
        );
        const updatedTarget = [...prevTasks[targetColumn], task];
        return {
          ...prevTasks,
          [sourceColumn]: updatedSource,
          [targetColumn]: updatedTarget,
        };
      });
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      {Object.keys(tasks).map((column) => (
        <div
          key={column}
          className="column"
          onDragOver={allowDrop}
          onDrop={(event) => handleDrop(event, column)}
        >
          <h3>{column.toUpperCase()}</h3>
          <p className="task-count">{tasks[column].length} tasks</p>
          <Suspense fallback={<div>Loading tasks...</div>}>
            {tasks[column].map((task) => (
              <Task
                key={task.name}
                task={task}
                column={column}
                handleDragStart={handleDragStart}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </Suspense>
          <div className="add-task">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder={`Add task to ${column}`}
            />
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Assign to</option>
              {teamMembers.map((member) => (
                <option key={member} value={member}>
                  {member}
                </option>
              ))}
            </select>
            <button onClick={() => handleAddTask(column)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskManagement;
