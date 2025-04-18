import axios from 'axios';

const API_URL = 'http://localhost:3000/api/lezioni';

export const fetchLezioni = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching lessons: ' + error.message);
  }
};