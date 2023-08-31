import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const styleface = { color: "#0165E1", fontSize: "2em", marginTop: "60px", marginLeft: "20px"};
  const styleyou = {
    color: "#FF0000",
    fontSize: "2em",
    marginTop: "60px",
    marginLeft: "20px",
    
  };
   const instagram = {
     color: "#E1306C",
     fontSize: "2em",
     marginTop: "60px",
     marginLeft: "20px",
   };
  return (
    <footer className="foot">
      <div className="contae">
        <div>
          <img
            className="img"
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
          />
        </div>
        <div className="icons-soc">
          <a target="_blank" href="https://www.instagram.com/evangaditech/">
            <FontAwesomeIcon icon={faInstagram} style={instagram} />
          </a>

          <a target="_blank" href="https://www.facebook.com/evangaditech">
            <FontAwesomeIcon icon={faFacebook} style={styleface} />
          </a>
          <a target="_blank" href="https://www.youtube.com/@EvangadiTech">

            <FontAwesomeIcon icon={faYoutube} style={styleyou} />
          </a>
        </div>
        <div className="lnk-s">
          <ul>
            <h3>Useful Link</h3>
            <li>
              <a href="3">How it works</a>
            </li>
            <li>
              <a href="3">Terms of Service</a>
            </li>
            <li>
              <a href="3">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="Contact-Info">
          <h3>Contact Info</h3>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
