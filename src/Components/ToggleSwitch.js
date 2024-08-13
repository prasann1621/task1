import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, onToggle }) => {
    return (
        <div className="toggle-switch">
            <span>For Kids</span>
            <input
                checked={!isOn}
                onChange={onToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
            <span>For Adults (+18)</span>
        </div>
    );
};

export default ToggleSwitch;
