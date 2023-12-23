
import { Link,  } from "react-router-dom";
import './Login.css'
import {  useRef, useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false)
    const emailRef = useRef();

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
          
    }
 
    return (
        <div>
            <div className="banner text-white">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black  bg-opacity-80 rounded-xl">
                            <div className="card-body">
                                <form onSubmit={handelLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" ref={emailRef} placeholder="Enter Your Email" name="email" className="input input-bordered rounded-md bg-black border-[rgb(91,91,92)] " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <div className="flex">
                                            <input type={show ? "text" : "Password"} placeholder="Enter Your Password" name="password" className="input input-bordered w-full rounded-l-md bg-black border-[rgb(91,91,92)] " required />
                                            <div className=" my-auto btn border-l-0 rounded-r-md bg-black border-[rgb(91,91,92)] text-white" onClick={() => setShow(!show)}>
                                                {
                                                    show ? <p className="flex "><span className="w-[30px] ">Hide</span></p> : <p className="flex "> <span className="w-[30px]">Show</span></p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn w-full mt-5 text-white bg-[rgb(255,157,42)] rounded-md ">Login</button><br />
                                </form>
                                <label className="label">
                                    <button className="link-hover mx-auto text-[rgb(255,157,42)] rounded-md " >Forgotten password?</button>
                                </label>
                                <div className="divider text-xs my-0">OR</div>
                              
                                <p> <span className="text-sm">You don,t have an account? </span> <Link className="link-hover ml-10 text-sm text-[rgb(255,157,42)]" to='/register' > Register Now </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;