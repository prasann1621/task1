import React from 'react';
import PropTypes from 'prop-types';
import './FeatureCard.css'; // If you have styles for FeatureCard

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className="feature-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

FeatureCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureCard;
