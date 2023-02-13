import s from './Header.module.scss'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

export default function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerWrapper}>
        <div className={s.logoContainer}>
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
