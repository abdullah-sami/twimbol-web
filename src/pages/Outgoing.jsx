import { useLocation } from "react-router-dom";
import React from "react";


export const Outgoing = () => {
    const location = useLocation();
    const { link } = location.state || {};

    console.log("Outgoing link:", link); // Debugging log
  if (link){
    window.open(link, "_blank");
  }


    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Redirecting...</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>You are being redirected to an external link.</p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.2rem", color: "#007bff", textDecoration: "none" }}>
        Click here if you are not redirected automatically
      </a>
    </div>
    )


}



export default Outgoing;