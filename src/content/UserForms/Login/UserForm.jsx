import { useState } from "react";
import classes from "./UserForm.module.css";

export default function UserForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  const [editing, setEditing] = useState({
    username: true,
    password: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  }; 

  const handleFormChange = (field, value) => {
    setFormFields((prevData) => ({
      ...prevData,
      [field] : value,
    }))
    setEditing((prevData) => ({
      ...prevData,
      [field] : true
    }))
  }

  const handleLostFocus = (field) => {
    setEditing((prevData) => ({
      ...prevData,
      [field] : false
    }))
    console.log(field+" lost focus")
  }

  const usernameValid = formFields.username.includes('@') || editing.username

  return (
    <div className={classes.form_container}>
      <p className={classes.title}>Login</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.input_group}>
          <label htmlFor="username">Username</label>
          {!usernameValid && <label>Invalid. @ required.</label>}      
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            value={formFields.username}
            onBlur={() => handleLostFocus('username')}
            onChange={(event) => handleFormChange('username',event.target.value)}
          />          
        </div>        
        <div className={classes.input_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={formFields.password}
            onChange={(event) => handleFormChange('password',event.target.value)}
          />
        </div>
        <button className={classes.sign}>Sign in</button>
      </form>      
    </div>
  );
}
