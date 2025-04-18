import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Lezioni App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/lezioni">Lezioni</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;