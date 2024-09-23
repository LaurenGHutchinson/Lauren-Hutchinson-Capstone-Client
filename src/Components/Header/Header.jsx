import './Header.scss'
import logo from '../../assets/Big-Logo.png';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import backIcon from '../../assets/Icons/left-arrow.png';

function Header() {
  const [currentPage, setCurrentPage] = useState();
  console.log(currentPage);
  let pageName = window.location.pathname.split('/').pop();
  useEffect(() => {
    setCurrentPage(pageName)
  }, [])

  return (
    <div className="header__container">
      <Link to="/"><img className="header__logo" src={logo}/></Link>
      <nav className="header__nav">

        <Link to="/">
        <div className="header__nav-back">
          <img className="icon" src={backIcon}/>
          <h3 className="header__items">Change Careers</h3>
        </div></Link>
        <Link className={currentPage === 'quiz' || currentPage === 'results' ? 'active' : ''} to="/quiz"><h3 className="header__items">Quiz</h3></Link>
        <Link className={currentPage === 'debugger' ? 'active' : ''} to="/debugger"><h3 className="header__items">Debugger</h3></Link>
        <Link className={currentPage === 'code-challenge' ? 'active' : ''} to="/code-challenge"><h3 className="header__items">Code Challenge</h3></Link>
      </nav>
</div>
  )
}

export default Header