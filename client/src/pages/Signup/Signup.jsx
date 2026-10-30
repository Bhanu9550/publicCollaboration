

import React, { useEffect, useState } from 'react'
import api from "../../config/axios"
import "./Signup.css"
import Navbar from '../../components/Navbar/Navbar'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [userData, setuserData] = useState({
        username: '',
        email: '',
        password: ''
    })


    async function datastore(e) {

        e.preventDefault()
        try {
            const response = await api.post("/signup", userData)
            // setuserData(response)
            console.log(response.data)
            alert("Signup successful!");

            navigate("/signin");


        }
        catch (error) {
            console.log("message :", error)
        }
    }





    function handleChange(e) {
        const { name, value } = e.target

        setuserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <>

            <Navbar />
            <div className='HomeHeading'>
                <SideNavbar />
                <div className='formRightContent'>
                    <form onSubmit={datastore} >
                        <h1 style={{ marginLeft: "25px" }}>Create Account...!</h1>
                        <div>
                            <label htmlFor="">Name :</label>
                            <input type="text" name="username" id="" value={userData.username} onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label htmlFor="">E-mail :</label>
                            <input type="email" name="email" id="" value={userData.email} onChange={(e) => handleChange(e)} />
                        </div>

                        <div>
                            <label htmlFor="">Password :</label>
                            <input type="password" name='password' value={userData.password} onChange={(e) => handleChange(e)} />
                        </div>

                        <button type="submit">Sign Up</button>

                    </form>
                </div>


            </div>

        </>
    )
}

export default Signup