import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import DropDownInput from '../components/UI/InputDropDown'
import SearchInput from '../components/UI/SearchInput'
import s from './Home.module.scss'
import { ReactComponent as ErrorIcon } from '../assets/svg/error.svg'
import { ReactComponent as AttentionIcon } from '../assets/svg/attention.svg'

export default function Home() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [yearValue, setYearValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [error, setError] = useState(false)

  async function fetchMovieHandler() {
    setError(false)
    return await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=thor`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        } else {
          return response.json()
        }
      })
      .then((data) => {
        if (data.Response && data.Response == 'False') {
          setError(true)
        } else {
          navigate('/movie', { state: { movie: data } })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (searchValue !== '' || yearValue !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [searchValue, yearValue])

  function handleSearchCallback(val: string) {
    setSearchValue(val)
  }

  function handleYearCallback(val: string) {
    setYearValue(val)
  }

  return (
    <div className={s.rootContainer}>
      <div className={s.textContent}>
        <h1>MOVIEFINDER</h1>
        <p>Find information for thousands of movies</p>
      </div>
      <div className={s.inputWrapper}>
        <SearchInput searchCallback={handleSearchCallback} />
        <div className={s.breakLine} />
        <DropDownInput yearCallback={handleYearCallback} />
        <Button
          customClass={s.searchBtn}
          onClick={fetchMovieHandler}
          isDisabled={isDisabled}
        >
          Search
        </Button>
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
            precise <em>(optional)</em>
          </p>
        </div>
      )}
    </div>
  )
}
