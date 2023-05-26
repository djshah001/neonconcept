import React, { useEffect, useState } from "react";
import About from "./About";
import PhotoCarousel from "../PhotoCarousel";
import Navhead from "../Navhead";
import Para from "../Para";
import axios from "axios";

function Aboutus() {
  const [AboutUsInfo, setAboutUsInfo] = useState({});
  const url = `${process.env.REACT_APP_HOST}`;

  const getCmsMaster = async () => {
    try {
      const result = await axios.get(`${url}cmsmaster/getall`);
      return result.data;
    } catch (error) {}
  };

  useEffect(() => {
    getCmsMaster().then((res) => {
      console.log(res);
      setAboutUsInfo(res[0]);
    });
  }, []);

 console.log(AboutUsInfo)

  return (
    <>
      <Navhead title="Get To Know Us" route="About Us" />
      <About tagLine={AboutUsInfo.tagLine}/>
      <Para
        para={AboutUsInfo.description}
      />
      <PhotoCarousel />
    </>
  );
}

export default Aboutus;
