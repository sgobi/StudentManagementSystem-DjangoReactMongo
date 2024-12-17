import axios from 'axios';

export function getMarks() {
    return axios.get('http://127.0.0.1:8000/marks/')
      .then(response => response.data)
  }