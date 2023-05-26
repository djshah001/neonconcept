import React from "react";
import CmsMasterContext from "../contexts/CmsMasterContext";
import axios from "axios";

function CmsMasterState(props) {
  const url = `${process.env.REACT_APP_HOST}`;

  const addCmsMaster = async (cmsInfo) => {
    try {
      const result = await axios.post(`${url}cmsmaster/add`, cmsInfo);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCmsMaster = async (id, cmsInfo) => {
    console.log(id, cmsInfo);
    try {
      const result = await axios.post(`${url}cmsmaster/update`, {id:id,...cmsInfo});
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCmsMaster = async () => {
    try {
      const result = await axios.get(`${url}cmsmaster/getall`);
      return result.data;
    } catch (error) {}
  };

  const getCmsMasterById = async (Id) => {
    try {
      const result = await axios.post(`${url}cmsmaster/get`, { id: Id });
      return result.data;
    } catch (error) {}
  };

  const deleteCmsMaster = async (bannerId) => {
    try {
      const result = await axios.post(`${url}cmsmaster/delete`, { id: bannerId });
      return result.data;
    } catch (error) {}
  };

  return (
    <CmsMasterContext.Provider
      value={{
        addCmsMaster,
        updateCmsMaster,
        getCmsMaster,
        getCmsMasterById,
        deleteCmsMaster,
      }}
    >
      {props.children}
    </CmsMasterContext.Provider>
  );
}

export default CmsMasterState;
