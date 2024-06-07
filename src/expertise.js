import React from 'react';
import './expertise.css';
import Seg3 from './3seg';
function Expertise() {
    return (
        <div className='Expert'>
            <h1>My Expertise</h1>
            <div className="expertness">
                <Seg3 
                ico="Computer" 
                topic="AI/ML Enthusiast" 
                para="Experienced in Neural Networks, Deep Learning, Computer Vision, NLP, and LLM using Python, TensorFlow, Keras, and OpenCV."
                c="red"
                />
                <Seg3 
                ico="React Icon" 
                topic="Frontend/Backened Dev" 
                para="Experience in HTML, CSS, JS, React, Node.js,springboot,MySQL"
                c="blue"
                />
                <Seg3 
                ico="React Icon" 
                topic="Competitive Programmer" 
                para="Experience in DSA, Algorithms, Problem Solving, and Competitive Programming in Java."
                c="Yellow"
                />
               

            </div>
        </div>
    );
}

export default Expertise;