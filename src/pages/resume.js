import React from 'react';
import resume from '../assets/ChanduChitteti.pdf';

const Resume = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '24px'
      }}>
        My Resume
      </div>

      {/* Horizontal Scrolling Area */}
      <div style={{
        overflowX: 'auto',
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}>
        <iframe
          src={resume} // Directly set the src to the imported PDF
          title="Resume PDF"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            minWidth: '600px', // Minimum width to allow scrolling
            minHeight: '100%', // Full height of the container
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
