import React from 'react';
import './Style.css'; // Lägg till din CSS-fil eller koden i ditt projekt
import Footer from '../components/Footer/Footer';
import Button from '../generics/Button';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <main>
        <h1>404 Page Not Found</h1>
        <Button type="" text="Go bak to home" url="/" />

      </main>
      <div className='lastSection'>
        {/* Innehållet i din sista sektion */}
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;