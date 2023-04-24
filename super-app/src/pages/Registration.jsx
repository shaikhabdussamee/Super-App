import React, { useState } from 'react';
import Registration_img from "../assets/registration/front.png";
import super_app_img from "../assets/registration/Super app.png";

const initState = {
    name: "",
    userName: "",
    email: "",
    mobile: "",
}

const Registration = () => {
    const [form, setForm] = useState(initState);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
        localStorage.setItem("superappUser", JSON.stringify(form))
        setForm(initState)
    }
  return (
    <div style={{
        width: "100%",
        display: "flex",
        backgroundColor: "black",
        color: "white",
    }}>
        <div style={{
       position: "relative",
    }}>
            <img style={{
                width: "700px",
                height: "100vh",
                }} src={Registration_img} alt={Registration_img} />
            <div style={{
                width: "300px",
                display: 'flex',
                gap: '30px',
                position: "absolute",
                top: '20px',
                left: '50px'
            }}>
                <p>Already have an account?</p>
                <p><button style={{backgroundColor: "#72DB73", color: 'white', borderRadius: '33px', padding: "5px 15px"}}>LOGIN</button></p>
            </div>
            <p style={{
                width: "450px",
                fontSize: "40px",
                fontWeight: 'bold',
                textAlign: 'left',
                position: "absolute",
                bottom: "20px",
                left: "50px"
            }}>
                Discover new things on Superapp
            </p>
        </div>

        <div style={{width: "55%"}}>
            <div>
                <img style={{marginTop: "80px"}} src={super_app_img} alt={super_app_img} />
                <p>Create your new account</p>
                <div style={{width: "120px",margin: "auto",display: "flex", gap: "10px"}}>
                    <p>Email</p>
                    <p>|</p>
                    <p>Google</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input required onChange={handleChange} name='name' value={form.name} style={{color: "white",width: "280px",margin: "auto", marginTop: "10px",display: "block", padding: "10px 10px", backgroundColor: "#292929", border: "none", borderRadius: "3.81584px"}} type="text" placeholder='Name'/>
                    <input required onChange={handleChange} name='userName' value={form.userName} style={{color: "white",width: "280px",margin: "auto", marginTop: "10px",display: "block", padding: "10px 10px", backgroundColor: "#292929", border: "none", borderRadius: "3.81584px"}} type="text" placeholder='UserName'/>
                    <input required onChange={handleChange} name='email' value={form.email} style={{color: "white",width: "280px",margin: "auto", marginTop: "10px",display: "block", padding: "10px 10px", backgroundColor: "#292929", border: "none", borderRadius: "3.81584px"}} type="email" placeholder='Email'/>
                    <input required onChange={handleChange} name='mobile' value={form.mobile} style={{color: "white",width: "280px",margin: "auto", marginTop: "10px",display: "block", padding: "10px 10px", backgroundColor: "#292929", border: "none", borderRadius: "3.81584px"}} type="text" placeholder='Mobile'/>
                    <div style={{marginTop: "10px"}}>
                        <input type="checkbox" />
                        <label>Share my registration data with Superapp</label>
                    </div>
                    <div style={{ width: "42%", margin: "auto", textAlign: "left", fontSize: "14px"}}>
                        <button type='submit' style={{cursor: 'pointer',width: "100%", backgroundColor: "#72DB73", color: 'white', borderRadius: '28px', padding: "10px", marginTop: "30px", fontSize: "20px"}}>Sign Up</button>
                        <p><span style={{color: "gray"}}>By click on Signup, you agree to Superapp </span><span style={{color:("0deg", "#72DB73", "#72DB73")}}>Terms and Condition of use</span></p>
                        <p><span style={{color: "gray"}}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp</span><span style={{color:("0deg", "#72DB73", "#72DB73")}}> Privacy Policy.</span> </p>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Registration;