import './Navbar.css'
import { MdOutlineAccountCircle } from 'react-icons/md';

const Navbar = () => {

    const navitam = <>

        <ul className="flex text-xl">
            <li className="">Phone
                <ul className="dropdown">
                    <li>i Phone</li>
                    <li>Samsung</li>
                    <li>OnePlus</li>
                    <li>Vivo</li>

                </ul>
            </li>
            <li>Tab
                <ul className="dropdown">
                    <li>i Phone</li>
                    <li>Samsung</li>
                    <li>OnePlus</li>
                    <li>Vivo</li>

                </ul>
            </li>
        </ul>


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitam}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitam}
                    </ul>
                </div>
                <div className="navbar-end">

                    <button className="mr-16" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <div className='flex'>
                            <MdOutlineAccountCircle className='my-auto w-[40px] h-[40px]'></MdOutlineAccountCircle>
                            <div className='ml-1'>
                                <h1 className='mr-14'>Account </h1>
                                <h1>Register or Login</h1>
                            </div>
                        </div>
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default Navbar;