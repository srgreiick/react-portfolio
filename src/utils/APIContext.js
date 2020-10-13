import React from "react";

const UserContext = React.createContext({
  name: "",
  phone: "",
  email: "",
  image: "",
  DOB: "",
  handleBtnClick: () => {}
});

export default UserContext;