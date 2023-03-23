import React from "react";

function Para(props) {
  return (
    <section id="project_detail container" className="container ">
      <div class="container my-auto">
        <div class="row ">
          <div class="col-lg-13 col-sm-12 col-md-10 offset-md-1 text-center">
            <p>
              {props.para1}
            </p>
            <p>
              {props.para2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Para;
