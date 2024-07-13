import React from 'react';

const Career = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* First Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india.jpg"
              className="card-img-top"
              alt="Career Options in India"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Career Options in India 2024</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Saakshi</p>
                  <p className="mb-0 text-muted">04 Jul, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/career-options-in-india/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp"
              className="card-img-top"
              alt="Top Technologies to Learn Now"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Top Technologies to Learn Now</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Tomar</p>
                  <p className="mb-0 text-muted">14 Jun, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/top-technologies-to-learn-now/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2023/03/Top-Software-Engineering-Careers.jpg"
              className="card-img-top"
              alt="Best Software Engineering Career Options"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Best Software Engineering Career Options</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Lukesh S</p>
                  <p className="mb-0 text-muted">14 Jun, 2024</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/best-software-engineering-career-options/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
