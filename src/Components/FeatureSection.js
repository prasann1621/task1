import React from 'react';
import FeatureCard from './FeatureCard';
import './FeatureCard.css';

import onlineTeachingImage from '../Assets/online-teaching.png';
import liveClassesImage from '../Assets/live-classes.png';
import trainedTeachersImage from '../Assets/trained-teachers.png';
import visualConceptsImage from '../Assets/visual-concepts.png';
import gamifiedCourseImage from '../Assets/gamified-course.png';

const FeaturesSection = () => {
    const features = [
        { image: onlineTeachingImage, title: 'Online Teaching', description: 'Description here.' },
        { image: liveClassesImage, title: 'Live Classes', description: 'Description here.' },
        { image: trainedTeachersImage, title: 'Trained Teachers', description: 'Description here.' },
        { image: visualConceptsImage, title: 'Visual Concepts', description: 'Description here.' },
        { image: gamifiedCourseImage, title: 'Gamified Course', description: 'Description here.' },
        { image: liveClassesImage, title: 'Trained Teachers', description: 'Description here.' },
    ];

    return (
        <div className="features-section">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default FeaturesSection;
