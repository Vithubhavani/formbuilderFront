// FolderCreate.js
import React, { useState } from 'react';
import { postfolder } from '../services/folder';
import styles from './Folder.module.css';
const FolderCreate = ({ setShowForm, setFolders }) => {
  const [folderName, setFolderName] = useState("");

  const handleCreateFolder = async () => {
    if (!folderName.trim()) return alert("Folder name cannot be empty!");

    try {
      const response = await postfolder({ name: folderName });
      setFolders((prevFolders) => [...prevFolders, response.data]); 
      setShowForm(false); 
      setFolderName(""); 
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
      
        <h3 className={styles.head}>Create New Folder</h3>
      <div className={styles.input}>
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        className={styles.name}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <div className={styles.button}>
      <button onClick={handleCreateFolder} className={styles.save}>Done</button>
      <button onClick={() => setShowForm(false)} className={styles.cancel}>Cancel</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FolderCreate;
