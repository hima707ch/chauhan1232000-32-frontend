import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import EnquiryForm from './EnquiryForm.jsx';

const Body = () => {
    return (
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/enquiry" element={<EnquiryForm />} />
            </Routes>
          <Footer />
        </Router>
    );
};

export default Body;