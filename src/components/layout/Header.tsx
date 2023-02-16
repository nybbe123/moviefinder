import s from './Header.module.scss'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useState } from 'react'
import { ReactComponent as ErrorIcon } from '../../assets/svg/error.svg'

export default function Header() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [searchBarIsActive, setSearchBarIsActive] = useState(false)

  function searchBarCallbackHandler(error: boolean, isActive: boolean) {
    setError(error)
    setSearchBarIsActive(isActive)
  }

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
        <div
          className={`${s.searchContainer} ${
            searchBarIsActive ? s.inactive : ''
          }`}
          onClick={() => {
            setSearchBarIsActive(!searchBarIsActive)
          }}
        >
          {searchBarIsActive ? <CloseIcon /> : <SearchIcon />}
        </div>
      </div>
      {searchBarIsActive && <div className={s.searchModal} />}
      <div
        className={`${s.headerSearchBarContainer} ${
          searchBarIsActive ? s.active : ''
        }`}
      >
        <SearchBar
          searchBarCallback={searchBarCallbackHandler}
          customClass={s.customSearchBar}
        />
        {error && (
          <div className={s.errorContainer}>
            <ErrorIcon />
            <p className={s.errorMessage}>
              The movie you are looking for cant be found. Please check your
              spelling or try again.
            </p>
          </div>
        )}
      </div>
    </header>
  )
}
