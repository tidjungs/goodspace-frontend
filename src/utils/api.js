import axios from 'axios';
const API_HOST = 'http://localhost:8000'

export const getChildren = async () =>  await axios.get(`${API_HOST}/children`);

export const getChildrenById = async (id) => await axios.get(`${API_HOST}/children/${id}`);

export const getProject = async () => await axios.get(`${API_HOST}/projects`);
export const postProject = async ({ id, nameTH, nameENG, province, startDate, endDate, managerContact }) => await axios.post(`${API_HOST}/projects`, {
  id: parseInt(id, 10),
  name_th: nameTH,
  name_eng: nameENG,
  province: province,
  start_date: startDate,
  finish_date: endDate,
  manager_contact: managerContact, 
})