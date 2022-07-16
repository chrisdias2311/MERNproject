import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Signup = ()=>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const registerUser = async ()=>{
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type':'application/json'
            },
        })
        result = await result.json()
        console.warn(result)
        if(result){
            alert("You have been succesfully registered!")
            navigate('/');
        }
    }

    return(
        <div className="SignUp">
            <h1>Signup/Register</h1>

            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
            <br></br>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
            <br></br>
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
            <br></br>

            <button onClick={registerUser} className="appButton">Register</button>
        </div>
    )
}

export default Signup;