import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import BMI from './components/BMI';
import BMR from './components/bmr';
import About from './components/About'; 
import Login from './components/Login'; 

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state

    useEffect(() => {
        document.title = 'Wellness Watcher';
    }, []);

    const handleLogin = () => {
        console.log('Login successful! Updating authentication state.');
        setIsAuthenticated(true); // Set authenticated to true on login
    };

    const handleLogout = () => {
        console.log('Logout successful! Updating authentication state.');
        setIsAuthenticated(false); // Set authenticated to false on logout
    };

    return (
        <Router> 
            <div className="App">
                <Navbar onLogout={handleLogout} /> {/* Pass the logout handler to Navbar */}
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />  {/* Redirect to login */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />  {/* Add login route */}
                    {isAuthenticated ? (
                        <>
                            <Route path="/homepage" element={<Homepage />} />
                            <Route path="/BMR" element={<BMR />} /> 
                            <Route path="/BMI" element={<BMI />} />
                            <Route path="/about" element={<About />} /> 
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    )}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
