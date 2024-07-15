import React from 'react';
import image5 from '../assets/image5.webp'
import image7 from '../assets/image7.webp'
import image8 from '../assets/image8.webp'
import image9 from '../assets/image9,webp'

const CyberSecurity = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* First Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image7}
              className="card-img-top"
              alt="Why Should You Learn Cyber Security?"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Why Should You Learn Cyber Security?</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <div>
                  <p className="mb-0">By Bhardwaj</p>
                  <p className="mb-0 text-muted">23 Mar, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/why-should-you-learn-cyber-security/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image8}
              className="card-img-top"
              alt="Cybersecurity Jobs: The Ultimate Beginner's Guide with Roadmap"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Cybersecurity Jobs: The Ultimate Beginner's Guide with Roadmap</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Tarun Singh</p>
                  <p className="mb-0 text-muted">23 Mar, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image9}
              className="card-img-top"
              alt="Coding for Cybersecurity"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Coding for Cybersecurity</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Isha Sharma</p>
                  <p className="mb-0 text-muted">13 Dec,2023</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/coding-for-cybersecurity/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurity;
