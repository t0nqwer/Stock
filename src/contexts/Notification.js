import toast from "react-hot-toast";
export const notify = (e) =>
  toast(e, {
    style: {
      border: "1px solid #d14a13",
      padding: "13px",
      color: "white",
      backgroundColor: "#d14a13",
    },
  });
