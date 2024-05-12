import classes from "./SignUp.module.css";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");

    const formData = new FormData(event.target);
    const location = formData.getAll("location");
    const data = Object.fromEntries(formData.entries());
    data.location = location;
    console.log(data);
  };

  return (
    <div className={classes.form_container}>
      <p className={classes.title}>Sign Up</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.input_group}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="Role">Role</label>
          <select id="role" name="role">
            <option value="Dev">Dev</option>
            <option value="QA">QA</option>
            <option value="Ops">Ops</option>
          </select>
        </div>

        <legend>Location</legend>
        <div>
          <input
            type="checkbox"
            id="onshore"
            name="location"
            value="onshore"
          />
          <label htmlFor="onshore">Onshore</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="offshore"
            name="location"
            value="offshore"
          />
          <label htmlFor="offshore">Offshore</label>
        </div>

        <button type="submit" className={classes.sign}>
          Sign up
        </button>
      </form>
    </div>
  );
}
