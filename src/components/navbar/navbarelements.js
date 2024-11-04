import React from "react";


const Navbar = () => {
    return (

        <div className='landingpage'>
            <div className='navbar-container'>
                <nav className='navbar navbar-nav navbar-expand-md'>
                    <a href='/' className='navbar-brand user-select-none'>
                        The Lost City of Eldara
                    </a>
                    <ul className='nav navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a href='/story' className='nav-link m-2'>
                                Story
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/info' className='nav-link m-2'>
                                Info
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/about' className='nav-link m-2'>
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
