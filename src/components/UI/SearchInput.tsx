import s from './SearchInput.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

interface Props {
  searchCallback: (val: string) => void
}

export default function SearchInput({ searchCallback }: Props) {
  return (
    <>
      <label className={s.inputRoot}>
        <input
          className={s.inputBar}
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const newValue = e.target as HTMLInputElement
            searchCallback(newValue.value)
          }}
          placeholder="Search movie"
        />
        <SearchIcon />
      </label>
    </>
  )
}
