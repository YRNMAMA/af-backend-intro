import React, { useEffect, useState } from 'react';
import { fetchLessons } from '../services/api';

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLessons = async () => {
      try {
        const data = await fetchLessons();
        setLessons(data);
      } catch (err) {
        setError('Failed to fetch lessons');
      } finally {
        setLoading(false);
      }
    };

    getLessons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>{lesson.titolo}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;