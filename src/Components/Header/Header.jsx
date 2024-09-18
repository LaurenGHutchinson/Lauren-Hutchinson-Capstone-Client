import './Header.scss'
import logo from '../../assets/ByteBack-logo.png';
import {Link, useParams} from 'react-router-dom';
import backIcon from '../../assets/Icons/left-arrow.png';

function Header() {
  
  const params = useParams()

  return (
    <div className="header__container">
      <img className="header__logo" src={logo}/>
      <nav className="header__nav">
        <Link to="/"><h3>Change Careers</h3></Link>
        <Link to="/quiz"><h3>Quiz</h3></Link>
        <Link to="/debugger"><h3>Debugger</h3></Link>
        <Link to="/code-challenge"><h3>Code Challenge</h3></Link>
      </nav>
</div>
  )
}

export default Header