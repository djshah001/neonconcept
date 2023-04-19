import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {new Date().getFullYear()} © neonconcepts.com
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
