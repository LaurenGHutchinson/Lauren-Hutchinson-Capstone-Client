import './Footer.scss'
import GitHub from '../../assets/Icons/github.png';
import LinkedIn from '../../assets/Icons/linkedin.png';

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-container__text">Get In Touch</p>
      <a href="https://github.com/LaurenGrey1993" target="__blank"><img className="logo" src={GitHub} /></a>
      <a href="https://www.linkedin.com/in/lauren-g-hutchinson/" target="__blank"><img className="logo" src={LinkedIn} /></a>
      
      </div>
  )
}

export default Footer