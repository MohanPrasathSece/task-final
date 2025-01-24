import React from 'react';

function Task({ task, column, handleDragStart, handleDeleteTask }) {
  return (
    <div
      className="task"
      draggable
      onDragStart={(event) => handleDragStart(event, task, column)}
    >
      {task.name}
      <span>{task.assignedTo}</span>
      <button onClick={() => handleDeleteTask(column, task.name)}>X</button>
    </div>
  );
}

export default Task;
