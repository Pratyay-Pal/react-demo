import classes from "./UserForm.module.css";

export default function UserForm() {

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Submit")
	}

  return (
      <div className={classes.form_container}>
        <p className={classes.title}>Login</p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.input_group}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className={classes.input_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <button className={classes.sign}>Sign in</button>
        </form>
        {/* <p className={classes.signup}>
          Don't have an account?
          <a rel="noopener noreferrer" className={classes.signup}>
            Sign up
          </a>
        </p> */}
      </div>
  );
}
