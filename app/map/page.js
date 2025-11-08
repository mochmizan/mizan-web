"use client";

import { useEffect, useRef } from 'react';

export default function MapPage() {
  const mapContainerRef = useRef(null);
  
  const mapRef = useRef(null); 

  useEffect(() => {
    if (typeof window === 'undefined' || typeof L === 'undefined' || !mapContainerRef.current) {
      return;
    }

    if (mapRef.current) {
      return;
    }

    mapRef.current = L.map(mapContainerRef.current).setView([-7.7956, 110.3695], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    L.marker([-7.7956, 110.3695]).addTo(mapRef.current)
      .bindPopup('Tugu Yogyakarta.')
      .openPopup();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <main className="flex flex-col items-center mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        Peta Leaflet
      </h1>
      
      <div 
        ref={mapContainerRef} 
        style={{ 
          height: '500px', 
          width: '80%', 
          borderRadius: '8px', 
          border: '1px solid #000',
          maxWidth: '800px'
        }} 
      />
    </main>
  );
}