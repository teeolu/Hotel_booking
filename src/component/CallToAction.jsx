import React from 'react';

const CallToAction = ({ onClick }) => {
    return (
        <div className="cta">
            <h2 className="cta-book-now">
                Good news! We have four free rooms for your selected dates
            </h2>
            <button className="btn" onClick={onClick}>
                <span className="btn-visible">Save as PDF</span>
                <span className="btn-hidden">Saving PDF...</span>
            </button>
        </div>
    );
}

export default CallToAction;