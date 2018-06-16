import axios from 'axios';
const API_HOST = 'http://localhost:8000'

export const getChildren = async () =>  await axios.get(`${API_HOST}/children`);

export const getChildrenById = async (id) => await axios.get(`${API_HOST}/children/${id}`);

export const getProject = async () => await axios.get(`${API_HOST}/projects`);
export const postProject = async ({  }) => await axios.post(`${API_HOST}/projects`, {
  // name_th: ,
  // name_eng: ,
  // province: '',
  // start_date: '',
  // finish_date: ''
})