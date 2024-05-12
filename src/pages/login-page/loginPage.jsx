import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaUser , FaLock } from "react-icons/fa";

import "./loginPage.scss"


const LoginPage = ({setIsAuth}) => {
  const navigate = useNavigate();
  const login = () => {
    
    setIsAuth(true);
    navigate('/productPage');
    localStorage.setItem('isAuth' , true)
  }
  return (
    <div className="wrapper">
        <form className="form-box login" action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icons"/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icons"/>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button onClick={login}>Login</button>
        </form>
    </div>
  )
}

LoginPage.propTypes = {
  setIsAuth:PropTypes.func,
}

export default LoginPage;