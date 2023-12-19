// App.js
import React from 'react';
import FolderStructure from './FolderStructure';
import './App.css';


const App = () => {
  const folderStructure = {
    Documents: ['Document1.jpg', 'Document2.jpg', 'Document3.jpg'],
    Desktop: ['Screenshot1.jpg', 'videopal.mp4'],
    Downloads: [
      {
        Drivers: ['Printerdriver.dmg', 'cameradriver.dmg'],
      },
      'chromedriver.dmg',
    ],
    Applications: ['Webstorm.dmg', 'Pycharm.dmg', 'FileZila.dmg', 'Mattermost.dmg'],
  };

  const handleAdd = (path) => {
    // Implement add logic here
    // Update the state accordingly
  };

  const handleEdit = (path) => {
    // Implement edit logic here
    // Update the state accordingly
  };

  const handleDelete = (path) => {
    // Implement delete logic here
    // Update the state accordingly
  };

  return (
    <div>
      {Object.keys(folderStructure).map((folder, index) => (
        <FolderStructure
          key={index}
          folderName={folder}
          contents={folderStructure[folder]}
          depth={0}
          onAdd={(name) => handleAdd(`${folder}.${name}`)}
          onEdit={(name) => handleEdit(`${folder}.${name}`)}
          onDelete={(name) => handleDelete(`${folder}.${name}`)}
        />
      ))}
    </div>
  );
};

export default App;
