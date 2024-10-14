
import './CSS/OnlyLogin.css';
const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form className="loginsignup-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signin">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;