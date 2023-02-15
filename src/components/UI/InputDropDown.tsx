import s from './InputDropDown.module.scss'
import { useState } from 'react'
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow.svg'

interface Props {
  yearCallback: (val: string) => void
}

export default function DropDownInput({ yearCallback }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>('Year')
  const [containerIsActive, setContainerIsActive] = useState<boolean>(false)
  const year = new Date().getFullYear() - 99
  const years = Array.from(new Array(100), (_value, index) => index + year)

  return (
    <div className={`${s.rootContainer} ${containerIsActive ? s.active : ''}`}>
      <div
        className={s.inputHeader}
        onClick={() => {
          setContainerIsActive(!containerIsActive)
        }}
      >
        <p>{selectedValue}</p>
        <ArrowUpIcon />
      </div>
      <div className={`${s.inputBody} ${containerIsActive ? s.active : ''}`}>
        <ul>
          {/* {DUMMY_YEARS.map((year) => {
            return (
              <li
                key={year}
                onClick={() => {
                  yearCallback(year)
                  setSelectedValue(year)
                  setContainerIsActive(false)
                }}
                className={selectedValue == year ? s.active : ''}
              >
                {years}
              </li>
            )
          })} */}
          {years.reverse().map((year, index) => {
            return (
              <li
                key={index}
                value={year}
                className={selectedValue == String(year) ? s.active : ''}
                onClick={() => {
                  yearCallback(String(year))
                  setSelectedValue(String(year))
                  setContainerIsActive(false)
                }}
              >
                {year}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
