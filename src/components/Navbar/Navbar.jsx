import './Navbar.scss'
import s from '../../assets/img/softlex.svg'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__leftBlock">
          <a href="https://softlex.pro/" title="Softlex">
            <img className="nav__logo" src={s} alt="logo" />
          </a>
          <h1 className="nav__heading">Softlex</h1>
        </div>
        <p className="nav__description">Task_1</p>
      </div>
    </nav>
  )
}

export default Navbar
