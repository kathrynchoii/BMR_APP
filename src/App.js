import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import BMI from './components/BMI';
import BMR from './components/bmr'; // Check this import statement
import About from './components/About'; // Check the case of the component name here

function App() {
    useEffect(() => {
        document.title = 'BMR APP';
    }, []);

    return (
        <Router> 
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/BMR" element={<BMR />} /> {/* Ensure that the path matches */}
                    <Route path="/BMI" element={<BMI />} />
                    <Route path="/about" element={<About />} /> {/* Check the case of the component name here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
