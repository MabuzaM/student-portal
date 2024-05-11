import { useState } from "react";
import  "./LoginForm.scss";
import axios from "axios";
import { Employee, Student } from "@/app/utils/types";
import { Profile } from "../Profile/StudentProfile";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginForm({username = '', password = '', onInputChange = () => {}, onLogin = () => {}}) {
  return (
    <form className="Login-form" onSubmit={onLogin}>
      <label htmlFor="id" className="Login-form__id Login-form__field">
        STUDENT ID:
        <input
          type="text"
          name="username"
          value={username}
          className="Login-form__input"
          placeholder="Student ID OR Email"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="password" className="Login-form__password Login-form__field">
        PASSWORD:
        <input
          type="password"
          name="password"
          value={password}
          className="Login-form__input"
          placeholder="Password"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="id" className="Login-form__showpassword">
        <input type="checkbox" className="Login-form__input"/>
        Show password
      </label>

      <button type = "submit" className="Login-form__button Login-form__field">Login</button>
  
      <p>Don`t have an account yet? Apply to study <NavLink to="/studentRegistration">here</NavLink></p>
      <p>Forgot your password? Send us an <a href="#">email</a> (Make sure you use the email you provided during email your application)</p>
    </form>
  );
}
