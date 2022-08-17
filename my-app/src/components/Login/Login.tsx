import React, { FormEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAC } from "../../utils/redux/actionCreators";
import "./Login.css"
function Login (context:any) {
  const navigate = useNavigate();
     const [valid, setValid] = useState(true);
     const dispatch = useDispatch();
    const clickLogin = (event: any)=> {
        event.preventDefault()
        if (event.target.password!.value === "admin" && event.target.login!.value === "admin"){
          dispatch(loginUserAC("admin"))
          navigate('/cards')
        }
        else{
          event.target.password!.value = ""
          event.target.login!.value = ""
          setValid(false);
        } 
    }
  return (
    <div className="form-signin w-60 p-5 login-container">
      <form onSubmit={clickLogin}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input name="login" type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label  className={!valid ? "form-floating wrong" : undefined}>Login</label>
    </div>
    <div className="form-floating">
      <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label className={!valid ? "form-floating wrong" : undefined}>Password</label>
    </div>
    
    <div className="form-floating">
      <input  type="submit" className="w-100 btn btn-lg btn-primary" value="Log in"/> 
    </div>
    {!valid && <div className="form-floating"><label style={{color:"red", overflow:"unset"}}>Wrong credentials</label></div>}
  </form>
    </div>
  );
}

export default Login;
