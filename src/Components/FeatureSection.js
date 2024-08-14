import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import './FeatureCard.css';

// Map image names to imports
const imageMap = {
    "online-teaching.png": require('../Assets/online-teaching.png'),
    "live-classes.png": require('../Assets/live-classes.png'),
    "trained-teachers.png": require('../Assets/trained-teachers.png'),
    "visual-concepts.png": require('../Assets/visual-concepts.png'),
    "gamified-course.png": require('../Assets/gamified-course.png'),
    // Add other images here
};

const FeaturesSection = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file in the public directory
        fetch('/Api/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Map image names to actual image paths using the imageMap
                const mappedFeatures = data.map(feature => ({
                    ...feature,
                    image: imageMap[feature.image]
                }));
                setFeatures(mappedFeatures);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="features-section">
            {features.length > 0 ? (
                features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        image={feature.image}  // Use the mapped image path
                        title={feature.title}
                        description={feature.description}
                    />
                ))
            ) : (
                <p>Loading features...</p>
            )}
        </div>
    );
};

export default FeaturesSection;
