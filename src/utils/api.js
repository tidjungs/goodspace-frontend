import axios from 'axios';
const API_HOST = 'http://localhost:8000'


export const getProject = async () => await axios.get(`${API_HOST}/projects`);

export const postProject = async ({ id, nameTH, nameENG, startDate, endDate, managerContact }) => await axios.post(`${API_HOST}/projects`, {
  id: parseInt(id, 10),
  name_th: nameTH,
  name_eng: nameENG,
  start_date: startDate,
  finish_date: endDate,
  manager_contact: managerContact,
});

export const getCamp = async () => await axios.get(`${API_HOST}/camps`);

// export const postCamp = async ({ location, province, has_goodspace, project_id }) => await axios.post(`${API_HOST}/camps`, {
//   location,
//   province,
//   has_goodspace,
//   project_id,
// });

// export const getSuplier = async () => await axios.get(`${API_HOST}/camp`);

export const postCamp = async (payload) => await axios.post(`${API_HOST}/camps`, payload);

export const getParent = async () => await axios.get(`${API_HOST}/workers`);
export const getParentById = async (id) => await axios.get(`${API_HOST}/workers/${id}`);
export const postParent = async (payload) => await axios.post(`${API_HOST}/workers`, payload);

export const getChildren = async () => await axios.get(`${API_HOST}/children`);
export const getChildrenById = async (id) => await axios.get(`${API_HOST}/children/${id}`);
export const postChildren = async (payload) => await axios.post(`${API_HOST}/children`, payload);

export const searchChildren = async (textSearch) => await axios.get(`${API_HOST}/search/children?name=${textSearch}`);
