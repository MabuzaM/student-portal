import  "./LoginForm.css";

export default function LoginForm() {
  return (
    <form className="Login-form">
      <label htmlFor="id" className="Login-form__id Login-form__field">
        STUDENT ID:
        <input type="text" className="Login-form__input"/>
      </label>

      <label htmlFor="password" className="Login-form__password Login-form__field">
        PASSWORD:
        <input type="password" className="Login-form__input"/>
      </label>

      <label htmlFor="id" className="Login-form__showpassword">
        <input type="checkbox" className="Login-form__input"/>
        Show password
      </label>

      <button className="Login-form__button Login-form__field">Login</button>
  
      <p>Don\’t have an account yet? Apply to study <a href="#">here</a></p>
      <p>Forgot your password? Send us an <a href="#">email</a> (Make sure you use the email you provided during email your application)</p>
    </form>
  );
}
