import axios from 'axios';

const url = window.location.host.includes('gitpod.io') ?
              "https://" + window.location.host.replace('3000','3333') :
              window.location.protocol + '://' + window.location.host + ':3333';

const api = axios.create({
  baseURL: `${url}`,
});

export default api;
