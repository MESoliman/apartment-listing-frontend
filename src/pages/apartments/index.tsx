import { Apartment } from '@/apartment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await fetch('http://localhost:4000/apartments');
        const data = await response.json();
        setApartments(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Apartment Listings</h1>
      <div style={styles.grid}>
        {apartments.map((apartment) => (
          <div key={apartment.id} style={styles.apartmentCard}>
            <div style={{...styles.cardImage, backgroundImage: `url(${apartment.image})`}}>
            </div>
            <div style={styles.cardContent}>
              <Link href={`/apartments/${apartment.id}`}>
                <a style={styles.cardLink}>
                  <h2 style={styles.cardTitle}>{apartment.name}</h2>
                  <p style={styles.cardDescription}>{apartment.description}</p>
                  <p style={styles.cardPrice}>${apartment.price}</p>
                  <button style={styles.cardButton}>View Details</button>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 20px'
  },
  grid: {
    display: 'grid'
  },
  apartmentCard: {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  cardImage: {
    backgroundColor: '#f3f4f6',
    height: '240px'
  },
  cardContent: {
    padding: '20px'
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  cardDescription: {
    color: '#4b5563',
    marginBottom: '12px'
  },
  cardPrice: {
    fontWeight: 'bold',
    color: '#4b5563',
    marginBottom: '16px'
  },
  cardButton: {
    backgroundColor: '#1e40af',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default ApartmentsPage
