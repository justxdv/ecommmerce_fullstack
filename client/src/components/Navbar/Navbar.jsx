import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://em-content.zobj.net/thumbs/120/sony/336/flag-india_1f1ee-1f1f3.png"
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            La Galerie
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>

          <div className="icons">
            {
              isAuthenticated && <p>{user.name}</p>
            }
            {
              isAuthenticated ?
              <Logout onClick={() => logout({returnTo: window.location.origin})}/>
              :<PersonOutlineOutlinedIcon onClick={() => loginWithRedirect()} />
            }
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
