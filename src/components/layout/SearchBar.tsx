import Card from '../UI/Card'
import DropDownInput from '../UI/InputDropDown'
import SearchInput from '../UI/SearchInput'
import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import s from './SearchBar.module.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  searchBarCallback: (error: boolean, isActive: boolean) => void
  customClass?: string
}

export default function SearchBar({ searchBarCallback, customClass }: Props) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState<string>('')
  const [yearValue, setYearValue] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    searchBarCallback(false, true)
    return await fetch(
      `http://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_API_KEY
      }&t=${searchValue}${yearValue ? `&y=${yearValue}` : ''}`
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
          searchBarCallback(true, true)
        } else {
          searchBarCallback(false, false)
          navigate('/movie', { state: { movie: data } })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function searchCallback(value: string) {
    setSearchValue(value)
  }

  function yearCallback(value: string) {
    setYearValue(value)
  }

  useEffect(() => {
    if (searchValue !== '' || yearValue !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [searchValue, yearValue])

  return (
    <Card customClass={`${s.searchBarContainer} ${customClass}`}>
      <form
        onSubmit={handleSubmit}
        className={s.searchForm}
      >
        <SearchInput searchCallback={searchCallback} />
        <div className={s.breakLine} />
        <DropDownInput yearCallback={yearCallback} />
        <Button
          type={'submit'}
          customClass={s.searchBtn}
          isDisabled={isDisabled}
        >
          Search
        </Button>
      </form>
    </Card>
  )
}
