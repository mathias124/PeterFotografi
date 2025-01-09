import React from 'react';
import './Header.css';

interface Category {
  id: string;
  name: string;
}

interface HeaderProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <header className="header">
      <h1>Photografi</h1>
      <nav>
        {categories.map((category) => (
          <button
            key={category.id}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

