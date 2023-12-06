import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../components/Header.css";

const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <div className='container'>
                    <div className='top-header'>
                        <div className="social-icons">
                            <TwitterIcon className='icon' />
                            <FacebookIcon className='icon' />
                            <InstagramIcon className='icon' />
                            <LinkedInIcon className='icon' />
                        </div>
                        <div className="header-right">
                            <p>Sponsor</p>
                            <p className='login'>Login</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className='container'>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <a href="" style={{ fontSize: "20px" }}>ADOPTED</a>
                        </div>
                        <div className='links'>
                            <a href="" className='active'>Home</a>
                            <a href="">Adoption</a>
                            <a href="">Success Stories</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header