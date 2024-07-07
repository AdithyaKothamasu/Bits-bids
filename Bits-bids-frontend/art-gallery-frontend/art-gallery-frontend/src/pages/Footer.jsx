import AboutUs from "./AboutUs";
import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container ">
        <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
        </Link>
    </div>
  )
}
