import React from 'react';
import Image from 'next/image';

import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="Header">
      <Image alt='logo' src={logo} width={100}/>

      <h1 className="Header__text">
      Student portal login
      </h1>

      <Image alt='logo' src={logo} width={100}/>
    </header>
  );
}