import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate, useOutletContext } from "react-router-dom";
import { TableStyle } from "../DataTable/CustomStyles";
import { motion } from "framer-motion";
import CmsMasterContext from "../../ContextApi/contexts/CmsMasterContext";
import { EditBtn } from "../Btns/EditBtn";
import { DeleteBtn } from "../Btns/DeleteBtn";

function CmsMaster(props) {
  const { setTitle } = useOutletContext();

  const [CmsMasterInfo, setCmsMasterInfo] = useState([]);
  const { getCmsMaster } = useContext(CmsMasterContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleClick = (id) => {
    navigate(`./update/${id}`);
  };

  const columns = [
    {
      name: "id",
      selector: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "Tag Line",
      selector: (row) => row.tagLine,
      // width: "",
    },
    {
      name: "Edit",
      selector: (row) => <EditBtn handleClick={handleClick} id={row._id} />,
      width: "100px",
    },
    {
      name: "delete",
      selector: (row) => (
        <>
          <DeleteBtn handleDelete={handleDelete} id={row._id} />
        </>
      ),
      width: "200px",
    },
  ];

  const getCmsMasterInfo = async () => {
    const res = await getCmsMaster();
    setCmsMasterInfo(res);
  };

  useEffect(() => {
    setTitle(props.title);
    getCmsMasterInfo();
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={CmsMasterInfo}
        customStyles={TableStyle}
        fixedHeader
        pagination
        responsive
        highlightOnHover
        style={{ border: "10px solid #ddd" }}
      />
    </>
  );
}

export default CmsMaster;
