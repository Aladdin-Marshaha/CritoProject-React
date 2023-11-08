import React from 'react';
import "./Map.css";

const Map = () => {
  return (
    <>
        <section className="map">
            <iframe className="karta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.939151605013!2d18.054069278028646!3d59.33123357461535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9da2b73711d3%3A0x76cfc52c3033bbeb!2sT-Centralen!5e1!3m2!1ssv!2sse!4v1696414578844!5m2!1ssv!2sse" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default Map;
