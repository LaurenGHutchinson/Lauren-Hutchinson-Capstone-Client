import './Header.scss'
import logo from '../../assets/ByteBack-logo.png';
import {Link} from 'react';

function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" src={logo}/>
      <nav>
        <Link><h3>Change Careers</h3></Link>
        <h3>Quiz</h3>
        <h3>Debugger</h3>
        <h3>Code Challenge</h3>
      </nav>
</div>
  )
}

export default Header