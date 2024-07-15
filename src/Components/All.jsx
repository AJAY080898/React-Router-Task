import React from 'react';
import image from '../assets/image.webp'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.png'

function All() {

  const guviBlogIconUrl = "https://www.guvi.in/build/q-C-SntEbV.webp";

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img 
              src={image} 
              className="card-img-top" 
              alt="Python Objects 101: How to - Guvi Blog" 
            />
            <div className="card-body">
              <h5 className="card-title">Python Objects 101: How to</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={guviBlogIconUrl} 
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Tushar Vinocha</p>
                  <p className="mb-0 text-muted">2024-07-07 10:00 AM</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">1000 views</p>
                <p className="mb-0">5 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/python-objects-101-for-beginners/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img 
              src={image2}
              className="card-img-top" 
              alt="Machine Learning Must - Guvi Blog" 
            />
            <div className="card-body">
              <h5 className="card-title">Machine Learning Must</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={guviBlogIconUrl} 
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <div>
                  <p className="mb-0">By Tarun Singh</p>
                  <p className="mb-0 text-muted">2024-07-07 09:00 AM</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/machine-learning-for-beginners/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img 
              src={image1} 
              className="card-img-top" 
              alt="Unlocking the Power of NLP - Guvi Blog" 
            />
            <div className="card-body">
              <h5 className="card-title">Unlocking the Power of NLP</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src={guviBlogIconUrl} 
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Srinithi Sankar</p>
                  <p className="mb-0 text-muted">2024-07-06 04:00 PM</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">800 views</p>
                <p className="mb-0">5 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/must-know-nlp-hacks-for-beginners/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
