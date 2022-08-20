import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../Styles/Footer.css'
function Footer() {
    return (
        <div className="footer">
        <div className="socialMedia">
       <a href="https://www.instagram.com/ramkishan1997/"> <InstagramIcon/></a>
       <a href="https://www.facebook.com/ramkishan.suryawanshi.5"> <FacebookIcon/></a>
       <a href="https://www.linkedin.com/in/ramkishan-suryawanshi/" ><LinkedInIcon/></a>
         <TwitterIcon/>
        </div>
            <p>&copy; 2022 Ram IT Services</p>
        </div>
    )
}

export default Footer
