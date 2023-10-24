
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Home from '../components/Home';

const NavBar = () => {

    const [showLinks, SetShowLinks] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        },

    ]
    return (
        <>
            <div className='flex px-5 md:px-20 justify-between '>
                <nav>
                    <p className='text-white text-4xl logo py-3 '>PRIYANSHU</p>
                </nav>
                <nav className='hidden md:flex'>
                    <ul className='text-white flex gap-x-10 text-lg text-slate-300  py-5 '>
                        {links.map(({ id, link }) => (
                            <li key={id} className='cursor-pointer text-white hover:scale-105 duration-200'>
                                <Link to={link} smooth duration={500} offset={-50}>{link}</Link>
                            </li>
                        )
                        )}
                    </ul>
                </nav>

                <div onClick={() => SetShowLinks(!showLinks)} className="md:hidden cursor-pointer text-white text-slate-300 py-4 z-10">
                    {
                        showLinks ? <FaTimes size={30} /> : <FaBars size={30} />
                    }

                </div>

                {
                    showLinks && (
                        <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white gap-10 text-2xl">
                            {links.map(({ id, link }) => (

                                <li key={id} className='cursor-pointer text-white hover:scale-105 duration-200' >
                                    <Link onClick={() => SetShowLinks(false)} to={link} smooth duration={500} offset={-50}>{link}</Link>
                                </li>
                            )
                            )}
                        </ul>
                    )
                }




            </div>
        </>
    );
}

export default NavBar;