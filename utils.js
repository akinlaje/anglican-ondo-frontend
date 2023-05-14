import axios from 'axios';
import { DateTime } from 'luxon'

export const JSONToFormData = (json) => {
  const formData = new FormData();

  for (const key in json) {
    formData.append(key, json[key]);
  }
  return formData;
};

export const isValidDate = (d) => {
  let valid = false;
  if (Object.prototype.toString.call(d) === '[object Date]') {
    if (!isNaN(d.getTime())) {
      valid = true;
    }
  }
  return valid;
};

export const saveFileToNextServer = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const res = await axios.post('/api/uploads', formData, config);

  return res;
};

export const deleteFileFromNextServer = async (filename) => {
  const res = await axios.delete('/api/uploads', { params: { filename } });
  return res;
};

export const formatDate = (date) => DateTime.fromJSDate(date).toFormat("yyyy'-'MM'-'dd")

export const formatTime = (date) => DateTime.fromJSDate(date).toLocaleString(DateTime.TIME_SIMPLE)

export const BASE_URL = 'https://backend-test-mtqp.onrender.com/api/';

export const api = axios.create({ baseURL: BASE_URL });


export const bulkSMSLink = 'https://www.ebulksms.com/'