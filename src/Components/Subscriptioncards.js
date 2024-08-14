import React, { useState } from 'react';
import SubscriptionCard from './subscription';

function SubscriptionCards() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [trialBooked, setTrialBooked] = useState(null);

  const handleDetailsClick = (tier) => {
    setSelectedPlan(tier);
    alert(`View details for ${tier}`);
  };

  const handleTrialClick = (tier) => {
    setTrialBooked(tier);
    alert(`Book free trial for ${tier}`);
  };

  return (
    <div style={styles.cardContainer}>
      <SubscriptionCard
        title="FUNDAMENTAL OF MEMORY"
        image="https://memorypower.rabsconnect.in/static/media/Mask%20Group1.6d2daf4722051871ddf3.png"
        description="Sequence, Fundamentals Coding Blocks, Loops"
        onDetailsClick={() => handleDetailsClick('Basic Plan')}
        onTrialClick={() => handleTrialClick('Basic Plan')}
      />
      <SubscriptionCard
        title="COMPREHENSIVE MEMORY"
        image="https://memorypower.rabsconnect.in/static/media/Mask%20Group2.cab2e7a4c4c0f2985f9c.png"
        description="Sequence, Fundamentals Coding Blocks, Loops"
        onDetailsClick={() => handleDetailsClick('Standard Plan')}
        onTrialClick={() => handleTrialClick('Standard Plan')}
      />
      <SubscriptionCard
        title="PANAROMIC MEMORY"
        image="https://memorypower.rabsconnect.in/static/media/Mask%20Group3.38ab955aedd836af2992.png"
        description="Sequence, Fundamentals Coding Blocks, Loops"
        onDetailsClick={() => handleDetailsClick('Premium Plan')}
        onTrialClick={() => handleTrialClick('Premium Plan')}
      />
      {selectedPlan && <p>Selected Plan: {selectedPlan}</p>}
      {trialBooked && <p>Trial Booked for: {trialBooked}</p>}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px 0',
  },
};

export default SubscriptionCards;