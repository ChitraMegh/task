// FolderStructure.js
import React, { useState } from 'react';

const FolderStructure = ({ folderName, contents, depth, onAdd, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAdd = () => {
    const newName = prompt('Enter the name for the new file or folder:');
    if (newName) {
      onAdd(newName);
    }
  };

  const handleEdit = () => {
    const newName = prompt('Enter the new name:');
    if (newName) {
      onEdit(newName);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this file or folder?');
    if (confirmDelete) {
      onDelete();
    }
  };

  const handleItemClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  return (
    <div style={{ marginLeft: `${depth * 20}px`, padding: '5px' }}>
      <span onClick={handleToggle}>{isOpen ? '📂' : '📁'}</span>
      <span onClick={handleItemClick} style={{ color: 'Black', marginLeft: '10px' }}>
        {folderName}
      </span>
      {isOptionsVisible && (
        <div>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {isOpen && (
        <ul>
          {contents.map((item, index) => (
            <li key={index}>
              {typeof item === 'string' ? (
                <span onClick={handleItemClick}>📄 {item}</span>
              ) : (
                <FolderStructure
                  folderName={Object.keys(item)[0]}
                  contents={Object.values(item)[0]}
                  depth={depth + 1}
                  onAdd={(name) => onAdd(`${folderName}.${name}`)}
                  onEdit={(name) => onEdit(`${folderName}.${name}`)}
                  onDelete={() => onDelete(`${folderName}.${Object.keys(item)[0]}`)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FolderStructure;
