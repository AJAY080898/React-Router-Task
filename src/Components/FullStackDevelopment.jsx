import React from 'react';
import image5 from '../assets/image5.webp'
import image13 from '../assets/image13.webp'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.webp'


const FullStackDevelopment = () => {
  const guviBlogIconUrl = 'https://www.guvi.in/blog/wp-content/uploads/guvi-blog-icon.png';

  return (
    <div className="container mt-4">
      <div className="row">
        {/* First Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image13}
              className="card-img-top"
              alt="Full Stack Development Project Ideas"
            />
            <div className="card-body">
              <h5 className="card-title">Full Stack Development Project Ideas</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <div>
                  <p className="mb-0">By Saakshi Priyadarshini</p>
                  <p className="mb-0 text-muted">29 Jun, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/full-stack-development-project-ideas/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image14}
              className="card-img-top"
              alt="Future Scope of Full Stack Developers in India"
            />
            <div className="card-body">
              <h5 className="card-title">Future & Scope of Full-Stack Developers in India</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Meghana D</p>
                  <p className="mb-0 text-muted">08 Jul, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/the-future-scope-of-full-stack-developers-in-india/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src={image15}
              className="card-img-top"
              alt="Secure Coding Practice in Full Stack Development"
            />
            <div className="card-body">
              <h5 className="card-title">Secure Coding Practice in Full Stack Development</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={image5}
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <div>
                  <p className="mb-0">By Jaishree Tomar</p>
                  <p className="mb-0 text-muted">22 Mar, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/tips-for-secure-coding-practices/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullStackDevelopment;
