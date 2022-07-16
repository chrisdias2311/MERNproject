import React from 'react';

const Login = ()=>{
    const [email, setEmail]=React.useState('');
    const [password, setPassword]=React.useState('');

    const loginHandle = ()=>{
        console.warn(email, password);
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <input className="inputBox" type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <input className="inputBox" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <br></br>
            <button className="appButton" type="button" onClick={loginHandle}>Login</button>
        </div>
    )
}

export default Login;
