import React from 'react';

const DataScience = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* First Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2024/07/Data-Science-Life-Cycle.webp"
              className="card-img-top"
              alt="Data Science Life Cycle"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">Data Science Life Cycle</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <div>
                  <p className="mb-0">By Tushar Vinocha</p>
                  <p className="mb-0 text-muted">13 Dec, 2023</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">1000 views</p>
                <p className="mb-0">5 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/data-science-life-cycle/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2024/07/What-is-Data-Science-Important-Factors-to-Learn-Before-Getting-Started.webp"
              className="card-img-top"
              alt="What is Data Science?"
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h5 className="card-title">What is Data Science?</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Tarun Singh</p>
                  <p className="mb-0 text-muted">13 Dec, 2023</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">500 views</p>
                <p className="mb-0">7 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/what-is-data-science/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border rounded bg-light">
            <img
              src="https://www.guvi.in/blog/wp-content/uploads/2024/07/The-Relationship-Between-Data-Science-and-Artificial-Intelligence.webp"
              className="card-img-top"
              alt="The Relationship Between Data Science and Artificial Intelligence"
              style={{ height: '200px', objectFit: 'cover' }}/>
            <div className="card-body">
              <h5 className="card-title">The Relationship Between Data Science and Artificial Intelligence</h5>
              <div className="d-flex align-items-center mb-2">
                <img 
                  src="https://www.guvi.in/build/q-C-SntEbV.webp"
                  alt="Guvi Blog Icon" 
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }} 
                />
                <div>
                  <p className="mb-0">By Tushar Vinocha</p>
                  <p className="mb-0 text-muted">13 Dec, 2023</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">750 views</p>
                <p className="mb-0">6 Min Read</p>
              </div>
              <a href="https://www.guvi.in/blog/data-science-and-artificial-intelligence/" className="btn btn-primary stretched-link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataScience;
