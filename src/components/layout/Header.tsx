import s from './Header.module.scss'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className={s.headerContainer}>
      <div className={s.headerWrapper}>
        <div
          className={s.logoContainer}
          onClick={() => navigate('/')}
        >
          <Logo />
          <h1>MOVIEFINDER</h1>
        </div>
        <div className={s.searchContainer}>
          <SearchIcon />
        </div>
      </div>
    </header>
  )
}
