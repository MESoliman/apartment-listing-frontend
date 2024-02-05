import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Apartment } from '@/apartment';

const ApartmentDetails = () => {
  const router = useRouter();
  const apartmentId = router.query.id;
  const [apartment, setApartment] = useState<Apartment | null>(null);
  

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/apartments/${apartmentId}`);
        const data = await response.json();

        setApartment(data);
      } catch (error) {
        console.error('Error fetching apartment details:', error);
      }
    };

    if (apartmentId) {
      fetchApartmentDetails();
    }
  }, [apartmentId]);

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container} >
      <h1 >{apartment.name}</h1>
      <div style={{ ...styles.apartmentDetails, ...styles.bgWhite, ...styles.shadowLg, ...styles.roundedLg, ...styles.overflowHidden }} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div style={{...styles.cardImage, backgroundImage: `url(${apartment.image})`}}>
            </div>
        <div style={styles.p4} >
          <p style={styles.textGray600} >{apartment.description}</p>
          <p style={styles.mt2} >Price: ${apartment.price}</p>
        </div>
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
  apartmentDetails: {
    marginTop: '20px'
  },
  bgWhite: {
    backgroundColor: '#ffffff'
  },
  shadowLg: {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  roundedLg: {
    borderRadius: '8px'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  p4: {
    padding: '16px'
  },
  textGray600: {
    color: '#4b5563'
  },
  mt2: {
    marginTop: '8px'
  }, cardImage: {
    backgroundColor: '#f3f4f6',
    height: '240px'
  },
};

export default ApartmentDetails;
