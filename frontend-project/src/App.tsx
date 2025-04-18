import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LessonList from './components/LessonList';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <LessonList />
      </main>
      <Footer />
    </div>
  );
};

export default App;