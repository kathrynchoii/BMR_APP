import React, { useState } from 'react';
import './BMI.css';
import backgroundImage from './bmiIMAGE.jpeg';

const Homepage = () => {
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('10');
    const [weight, setWeight] = useState('160');
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [bmi, setBMI] = useState('22.955');

    const calculateBMI = () => {
        const height = parseInt(heightFt) * 12 + parseInt(heightIn);
        const weightValue = parseFloat(weight);
        
        if (isNaN(height) || isNaN(weightValue) || height < 0 || weightValue < 0) {
            setErrorMessageVisible(true);
            return;
        }
        setErrorMessageVisible(false);

        let calculatedBMI;
        calculatedBMI = (weightValue / (height * height)) * 703;

        setBMI(calculatedBMI.toLocaleString("en-US"));
    };

    return (
        <div className="bmi-page"> {/* Wrapper with .bmi-page class */}
            <div className="bmi_calculator">
                <h2>BMI CALCULATOR</h2>
                <div className="controls">
                    <form>
                        <div className="height">
                            <h3>Height</h3>
                            <div className="feet">
                                <input type="text" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} />
                                <div className="ft">ft</div>
                            </div>
                            <div className="inches">
                                <input type="text" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} />
                                <div className="in">in</div>
                            </div>
                        </div>
                        <div className="weight">
                            <h3>Weight</h3>
                            <div className="pounds">
                                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                                <div className="lbs">lbs</div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="result">
                    <button className="calculate-btn" onClick={calculateBMI}>CALCULATE</button>
                    <div className="result-message">
                        <span className="bmiResult">{bmi}</span> 
                        <br />
                    </div>
                    <div className="unit">kg/m^2 
                    </div>
                    <div className={`error-message ${errorMessageVisible ? 'active' : ''}`}>
                        <p>Please enter all the details correctly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
