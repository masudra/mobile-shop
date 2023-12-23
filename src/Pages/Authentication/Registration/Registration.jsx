import { Link, } from "react-router-dom";
import './Registration.css'
import { useState } from "react";
import { } from "react-icons/ai";

const Registration = () => {
    const [error, setError] = useState();
    const [show, setShow] = useState();

    const handelRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError(' Please add some characters')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError(' Please add some numbers')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError(' Please add some capital letters')
            return
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError(' please add some small letters')
            return
        }
        else if (password.length < 8) {
            setError('munimum 8 leter add plese')
            return
        }
        else if (password.length > 20) {
            setError(' Maximum letter 20')
            return
        }
        console.log(name, email, password, phone);
    }

    return (
        <div>
            <div className="banner text-white">
                <div className="hero min-h-screen   ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full ">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black bg-opacity-90 rounded-xl">
                            <div className="card-body">
                                <form onSubmit={handelRegister}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-md bg-black border-[rgb(91,91,92)]" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered rounded-md bg-black border-[rgb(91,91,92)]" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Phone Number</span>
                                        </label>
                                        <input type="number" placeholder="Enter Your Phone Number" name="phone" className="input input-bordered rounded-md bg-black border-[rgb(91,91,92)]" required />
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
                                    <p className="text-red-600">{error}</p>

                                    <label className="label">
                                        <p> <span>if you have an account please  </span> <Link className="link-hover ml-10 text-xl text-[rgb(255,157,42)]" to='/login'>Login</Link></p>
                                    </label>
                                    <div className="mt-0">
                                        <label className="label">
                                            <input className="w-10 h-4 rounded-md " type="checkbox" required />
                                            <p className="text-xs ">Accept Our<Link className="link-hover ml-2  text-[rgb(255,157,42)]" to='/privacy'>privacy policy</Link></p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn text-white bg-[rgb(255,157,42)] rounded-md ">Register</button><br />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;