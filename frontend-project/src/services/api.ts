import axios from 'axios'; // Assicurati di installare axios con `npm install axios`


const API_URL = 'http://localhost:3000/api/lezioni';

export const fetchLezioni = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching lessons: ' + error.message);
    } else {
      throw new Error('Error fetching lessons: An unknown error occurred');
    }
  }
};
export const fetchLessons = async () => {
  // Logica per recuperare le lezioni
};
