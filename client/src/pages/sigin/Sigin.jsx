


import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import "./Sigin.css"
import api from "../../config/axios"

import { useNavigate } from "react-router-dom";


function Sigin() {

    const [LoginUser, setLoginUser] = useState({
        user_email: "",
        password: ""
    });


    function handleChange(e) {
        setLoginUser({
            ...LoginUser,
            [e.target.name]: e.target.value
        })
    }


    async function onsubmit(e) {
        try {
            e.preventDefault()

            const apidata = await api.post("/signin", LoginUser)
            console.log(apidata.data)
            // setLoginUser(apidata.data)
            alert("Welcome to File Collaboration Platform!");
            navigate("/");
        }

        catch (error) {
            console.log("Message:", error)
        }

    }



    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />

                <div className='formsiginContent'>
                    <form onSubmit={onsubmit}>
                        <h1 style={{ marginLeft: "25px" }}>Login Account...!</h1>
                        <div>
                            <label htmlFor="">Name :</label>
                            <input type="text" name="user_email" id="" value={LoginUser.user_email} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="">Password :</label>
                            <input type="password" name='password' value={LoginUser.password} onChange={handleChange} />
                        </div>

                        <button type="submit">Sign In</button>

                        <p className="signup-link">
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/Signup")}>
                                Create Account
                            </span>
                        </p>
                    </form>
                </div>


            </div>

        </>
    )
}

export default Sigin