export const TableStyle = {
  subHeader: {
    style: {
      backgroundColor: "#08080f",
      borderBottom: "1px solid #fff",
      color: "#fff",
      fontSize: "18px",
      padding: "20px 0",
      fontWeight: "700",
      fontFamily: "Helvetica",
      textAlign: "center",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      // backdropFilter: 'blur(10px)'
    },
  },
  headCells: {
    style: {
      backgroundColor: "#08040f",
      borderBottom: "1px solid #fff",
      color: "#fff",
      fontSize: "16px",
      padding: "15px 10px",
      fontWeight: "700",
      fontFamily: "Helvetica",
      // backdropFilter: 'blur(10px)'
    },
  },
  rows: {
    style: {
      color: "#cfcfcf",
      fontSize: "16px",
      fontWeight: "500",
      padding: "20px 0",
      backgroundColor: "#08040f",
      borderTop: "2px solid #25ad39",
      transition: "all 0.3s ease-in-out",
    },
    scrollBarStyle: {
      width: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "20px",
      "&:hover": {
        backgroundColor: "#aaa",
      },
      thumbStyle: {
        width: "10%",
        backgroundColor: "#d4d4d4",
      },
    },
    highlightOnHoverStyle: {
      backgroundColor: "#d9edf7",
      color: "#121212",
      transition: "all 0.3s ease-in-out",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#cecece",
      color: "#0f0f0f",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "20px",
    },
  },
};

export const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block", "link", "image"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: [] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];
