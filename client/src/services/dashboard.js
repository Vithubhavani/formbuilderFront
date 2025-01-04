import axios from 'axios';

export async function getFoldersAndFormsByIds(folderIds, formIds) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/form/dashboard/public/${folderIds}/${formIds}`
  );
  return res;
}

