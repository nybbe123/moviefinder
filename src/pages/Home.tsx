import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import DropDownInput from '../components/UI/InputDropDown'
import SearchInput from '../components/UI/SearchInput'
import s from './Home.module.scss'

type SearchData = {
  title: string
  year?: string
}

export default function Home() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [yearValue, setYearValue] = useState('')

  async function fetchMovieHandler() {
    const searchData: SearchData = {
      title: searchValue,
      year: yearValue
    }

    if (searchData.title !== '') {
      await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=thor`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          navigate('/movie', { state: { movie: data } })
        })
        .catch((err) => {
          console.log('Error has occured', err)
        })
    } else {
      console.log('NO DATA!')
      return
    }
  }

  function handleSearchCallback(val: string) {
    setSearchValue(val)
  }

  function handleYearCallback(val: string) {
    setYearValue(val)
  }

  return (
    <div className={s.rootContainer}>
      <div className={s.inputWrapper}>
        <SearchInput searchCallback={handleSearchCallback} />
        <div className={s.breakLine} />
        <DropDownInput yearCallback={handleYearCallback} />
        <Button
          customClass={s.searchBtn}
          onClick={fetchMovieHandler}
        >
          Search
        </Button>
      </div>
    </div>
  )
}
