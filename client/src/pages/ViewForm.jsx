import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoldersAndFormsByIds } from "../services/dashboard";

export default function ViewForm() {
  const { folderIds, formIds } = useParams(); // Extract IDs from URL
  const [folders, setFolders] = useState([]);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getFoldersAndFormsByIds(folderIds, formIds);
        setFolders(data.folders);
        setForms(data.forms);
      } catch (error) {
        console.error("Error fetching folders and forms:", error);
      }
    };

    fetchData();
  }, [folderIds, formIds]);

  return (
    <div>
      <h2>Folders</h2>
      {folders.length === 0 ? (
        <p>No folders found</p>
      ) : (
        folders.map(folder => <div key={folder._id}>{folder.name}</div>)
      )}

      <h2>Forms</h2>
      {forms.length === 0 ? (
        <p>No forms found</p>
      ) : (
        forms.map(form => <div key={form._id}>{form.name}</div>)
      )}
    </div>
  );
}
