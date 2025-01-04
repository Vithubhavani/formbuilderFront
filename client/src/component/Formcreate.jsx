// FolderCreate.js
import React, { useState } from 'react';
import { postform } from '../services/form';
import styles from './FormCreate.module.css'

const FolderCreate = ({ setShowBot,setBotForm }) => {
  const [formName, setFormName] = useState("");

  const handleCreateForm = async () => {
    if (!formName.trim()) return alert("Form name cannot be empty!");

    try {
      const response = await postform({ name: formName });
      setBotForm((prevForms) => [...prevForms, response.data]); 
      setShowBot(false); 
      setFormName(""); 
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.head}>Create New Form</div>
        <div>
      <input
        type="text"
        placeholder="Enter form name"
        value={formName}
        className={styles.name}
        onChange={(e) => setFormName(e.target.value)}
      />
      <div className={styles.button}>
      <button onClick={handleCreateForm} className={styles.save}>Done</button>
      <button onClick={() => setShowBot(false)} className={styles.cancel}>Cancel</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FolderCreate;
