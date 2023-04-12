import React from 'react'

function Home() {
  return (
    <div className="content-page">
      <div className="content">

        <div className="container-fluid">

          <div className="row">
            <div className="col-12">
              <div className="page-title-box">

                <h4 className="page-title text-white">Dashboard</h4>
              </div>
            </div>
          </div>

        </div>

      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {new Date().getFullYear()} © neonconcepts.com
            </div>
            {/* <div className="col-md-6">
              <div className="text-md-end footer-links d-none d-md-block">
                <a href="javascript: void(0);">About</a>
                <a href="javascript: void(0);">Support</a>
                <a href="javascript: void(0);">Contact Us</a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home