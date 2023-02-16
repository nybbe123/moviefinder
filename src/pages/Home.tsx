import { useState } from 'react'
import s from './Home.module.scss'
import { ReactComponent as ErrorIcon } from '../assets/svg/error.svg'
import { ReactComponent as AttentionIcon } from '../assets/svg/attention.svg'
import SearchBar from '../components/layout/SearchBar'

export default function Home() {
  const [error, setError] = useState<boolean>(false)

  function searchBarCallbackHandler(error: boolean) {
    setError(error)
  }

  return (
    <div className={s.rootContainer}>
      <SearchBar searchBarCallback={searchBarCallbackHandler} />
      <div className={s.textContent}>
        <h1>MOVIEFINDER</h1>
        <p>Find information for thousands of movies</p>
      </div>
      {error ? (
        <div className={s.descriptionContent}>
          <ErrorIcon />
          <p className={s.errorMessage}>
            The movie you are looking for cant be found. Please check your
            spelling or try again.
          </p>
        </div>
      ) : (
        <div className={s.descriptionContent}>
          <AttentionIcon />
          <p>
            Find your movie by <span>searching</span> its title{' '}
            <em>(mandatory)</em>. Use the <span>year input</span> to be more
            precise <em>(optional).</em>
          </p>
        </div>
      )}
    </div>
  )
}
