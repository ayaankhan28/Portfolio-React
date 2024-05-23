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
                topic="SOFTWARE DEVELOPMENT" 
                para="Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."
                />
                <Seg3 
                ico="React Icon" 
                topic="Frontend Dev
                React, NextJS" 
                para="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
                
                />
                <Seg3 
                ico="Computer Icon" 
                topic="Flutter Dev
                Android, iOS" 
                para="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework."
                />

            </div>
        </div>
    );
}

export default Expertise;