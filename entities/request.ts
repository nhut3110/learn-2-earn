import axios from 'axios';

export default function request(url: string, config: {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH';
  body?: any;
  params?: any;
}) {
  return axios(url, {
    method: config.method,
    params: config.params
  });
}