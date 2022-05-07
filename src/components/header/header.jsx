import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";


  export const Header = (props) => {
    return (
      <div className="header">
        <div className="wrapper">
          <Link to="/" className="header__store-title">
            Game Store
          </Link>
       </div>
      
        <div>
         <h1> Welcome {props.name}</h1>
       </div>
       <div className="wrapper header__cart-btn-wrapper">
          <CartBlock />
        </div>
      </div>
  );
  };

 
 
 
 






Header.defaultProps={name: "User"};

