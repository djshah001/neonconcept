import React from "react";

function Para(props) {
  return (
    <section id="project_detail container" className="container ">
      <div className="container my-auto">
        <div className="row ">
          <div className="col-lg-13 col-sm-12 col-md-10 offset-md-1">
            <p dangerouslySetInnerHTML={{ __html: props.para }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Para;
