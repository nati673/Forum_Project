import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; // Import the Bootstrap CSS
import axios from "axios";
import './SignUp.css'
import { UserContext } from "../../context/Usecontext";

const SignUp = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  //importing global state from context
  const [userData, setUserData] = useContext(UserContext);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending data to be registered in database
      await axios.post("http://localhost:4000/api/users", form);

      //once registered the login automatically so send the new user info to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      // set the global state with the new user info
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate to homepage once the user is signed up
      navigate("/");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
    }
  };
 return (
   <div className="container-fluid c sign_page">
     <div className="container d-md-flex mx-auto py-5 align-items-center">
       <div
         className="form_wrapper log col-12 col-md-6 me-md-2 p-5 d-flex flex-column"
         transition-style="in:wipe:up"
       >
         <p className="p11">Join the network</p>
         <p className="p22 lorem">
           Already have an account?
           <Link to="/login" className="a11">
             Sign in
           </Link>
         </p>
         <form onSubmit={handleSubmit}>
           <input
             className="in11 mr-1"
             name="email"
             onChange={handleChange}
             type="email"
             placeholder="Email"
           />
           <div className="FLname d-flex">
             <input
               className="in11 me-1"
               name="firstName"
               onChange={handleChange}
               type="text"
               placeholder="First Name"
             />

             <input
               className="in11 ms-1"
               name="lastName"
               onChange={handleChange}
               type="text"
               placeholder="Last Name"
             />
           </div>

           <input
             className="in11"
             name="userName"
             onChange={handleChange}
             type="text"
             placeholder="User Name"
           />

           <input
             className="in11"
             onChange={handleChange}
             name="password"
             //  type={type}
             placeholder="Password"
           />
           <span className="showHide">
             {/* <Icon icon={icon} size={20} onClick={HandleIconChange} /> */}
           </span>
           <button className="btnSign  blob-btn">
             Agree and Join
             <span class="blob-btn__inner">
               <span class="blob-btn__blobs">
                 <span class="blob-btn__blob"></span>
                 <span class="blob-btn__blob"></span>
                 <span class="blob-btn__blob"></span>
                 <span class="blob-btn__blob"></span>
               </span>
             </span>
           </button>
         </form>
         <p className="mt-md-5 mt-sm-5 text-center texttag">
           I agree to the
           <Link to="" className="a22">
             privacy policy
           </Link>
           and
           <Link to="" className="a22">
             terms of serivice.
           </Link>
         </p>

         <Link to="/login" className="a33 text-center">
           Already have an account?
         </Link>
       </div>
       <div className="SignupNote container mar ll-signup col-12 col-md-6 ms-md-2  mt-sm-5 ">
         <p className="forTitle">About</p>
         <h1>Evangadi Networks Q&A</h1>
         <p className="lorem">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
           voluptate officiis beatae nobis pariatur omnis facere accusamus
           laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
           quisquam! Molestias, ut commodi!
         </p>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
           voluptate officiis beatae nobis pariatur omnis facere accusamus
           laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
           quisquam! Molestias, ut commodi!
         </p>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor
           odio harum sunt, quaerat, molestias fuga expedita ad excepturi
           officiis aliquam aut nemo ratione culpa id laborum ipsum porro
           tempore?
         </p>
         <button className="btn1s">HOW IT WORKS</button>
       </div>
     </div>
   </div>
 );
};

export default SignUp;
