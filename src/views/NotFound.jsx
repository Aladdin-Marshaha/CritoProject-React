import React from 'react';
import './Style.css'; // Lägg till din CSS-fil eller koden i ditt projekt
import Footer from '../components/Footer/Footer';
import Button from '../generics/Button';

const NotFound = () => {
  return (
    <div className='wrapper'>
      <main className='main'>
        <h1 className='notFound'>404 Page Not Found</h1>
        <div className='goToBack'>
           <Button type="" text="Go back to home" url="/" />
        </div>
      </main>
      <div className='lastSection'>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;