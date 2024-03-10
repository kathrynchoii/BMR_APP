// bmr.js
import React, { useState } from 'react';
import './BMR.css';

    const Homepage = () => {
    const [age, setAge] = useState('25');
    const [heightFt, setHeightFt] = useState('5');
    const [heightIn, setHeightIn] = useState('10');
    const [weight, setWeight] = useState('160');
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [bmr, setBMR] = useState('1,785.12');

    const calculateBMR = () => {
    const height = parseInt(heightFt) * 12 + parseInt(heightIn);
    const weightValue = parseFloat(weight);
    const ageValue = parseFloat(age);
    const genderValue = document.querySelector(".bmr_calculator form input[name='gender']:checked").value;

    if (isNaN(ageValue) || isNaN(height) || isNaN(weightValue) || ageValue < 10 || ageValue > 100 || height < 0 || weightValue < 0) {
        setErrorMessageVisible(true);
        return;
    }
    setErrorMessageVisible(false);

    let calculatedBMR;
    if (genderValue === "male") {
        calculatedBMR = 66.47 + 6.24 * weightValue + 12.7 * height - 6.75 * ageValue;
    } else {
        calculatedBMR = 65.51 + 4.35 * weightValue + 4.7 * height - 4.7 * ageValue;
    }

    setBMR(calculatedBMR.toLocaleString("en-US"));
};

    return (
        <div className="bmr_calculator">
            <h2>BMR CALCULATOR</h2>
            <div className="controls">
                <form>
                    <h3>Age</h3>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                    <div className="gender">
                        <h3>Gender</h3>
                        <input type="radio" value="male" name="gender" checked={true} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" value="female" name="gender" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="height">
                        <h3>Height</h3>
                        <input type="text" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} />
                        <div className="unit">ft</div>
                        <input type="text" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} />
                        <div className="unit1">in</div>
                    </div> 
                    <div className="weight">
                        <h3>Weight</h3>
                        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <div className="unit2">lb</div>
                    </div>
                </form>
            </div>

            <div className="result">
                <button className="calculate-btn" onClick={calculateBMR}>CALCULATE</button>
                <div className="result-message">
                    <span className="calories">{bmr}</span> Calories/day
                </div>
                <div className={`error-message ${errorMessageVisible ? 'active' : ''}`}>
                    <p>Please enter all the details correctly.</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
