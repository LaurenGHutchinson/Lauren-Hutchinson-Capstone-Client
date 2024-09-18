import './Header.scss'
import logo from '../../assets/ByteBack-logo.png';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import backIcon from '../../assets/Icons/left-arrow.png';

function Header() {
  const [currentPage, setCurrentPage] = useState();
  const params = useParams()
  let pageName = window.location.pathname.split('/').pop();
  console.log(pageName);
  useEffect(() => {
    setCurrentPage(pageName)

  }, [])

  return (
    <div className="header__container">
      <Link to="/"><img className="header__logo" src={logo}/></Link>
      <nav className="header__nav">

        <Link to="/"><h3><img className="icon" src={backIcon}/>Change Careers</h3></Link>
        <Link className={currentPage === 'quiz' ? 'active' : ''} to="/quiz"><h3>Quiz</h3></Link>
        <Link className={currentPage === 'debugger' ? 'active' : ''} to="/debugger"><h3>Debugger</h3></Link>
        <Link className={currentPage === 'code-challenge' ? 'active' : ''} to="/code-challenge"><h3>Code Challenge</h3></Link>
      </nav>
</div>
  )
}

export default Header