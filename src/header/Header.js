import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Icon } from '@mui/material';

const Header = () => {

    const nickName = "testnickname"

    const logout = () => {
        sessionStorage.removeItem("user_id");

        window.location.href = "/";
    }

    if(window.location.pathname === '/') {
        return null;
    }

    return(
        <div className='header'>
            <div className='titleBar'>
                <div className='title'>
                    <Link to='/Seats'>
                        <h1 className='titletext'>Sight by Sight</h1>
                    </Link>
                    
                </div>
                <div className='mybtnwrap'>
                    <p className='mybtn' onClick={logout}>LOGOUT</p>
                    
                    <Link to = {`/MyPage/${nickName}`}>
                        <p className="mybtn">MY PAGE</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;