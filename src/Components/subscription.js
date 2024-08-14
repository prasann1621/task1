import React from 'react';
import { FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';  // Import specific icons

function SubscriptionCard({ title, image, description, onDetailsClick, onTrialClick }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={styles.buttonContainer}>
        <button onClick={onDetailsClick} style={styles.button}>
          <FaInfoCircle style={styles.icon} /> View Details
        </button>
        <button onClick={onTrialClick} style={styles.button}>
          <FaCalendarCheck style={styles.icon} /> Book Free Trial
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    width: '300px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',  // Stack buttons in a column
    alignItems: 'center',     // Center the buttons
  },
  button: {
    width: '80%',  // Make the button width 80% of the container
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content inside the button
    marginBottom: '10px',     // Space between buttons
  },
  icon: {
    marginRight: '8px',  // Space between icon and text
  },
};

export default SubscriptionCard;