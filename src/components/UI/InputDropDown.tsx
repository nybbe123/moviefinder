import s from './InputDropDown.module.scss'
import { useState } from 'react'
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow.svg'

interface Props {
  yearCallback: (val: string) => void
}

export default function DropDownInput({ yearCallback }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>('Year')
  const [containerIsActive, setContainerIsActive] = useState<boolean>(false)
  const year: number = new Date().getFullYear() - 99
  const years: string[] = Array.from(new Array(100), (_value, index) => {
    const i: number = index + year
    return String(i)
  })

  years.push('Year')

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
          {/* <li
            className={selectedValue == 'Year' ? s.active : ''}
            onClick={() => {
              yearCallback('Year')
              setSelectedValue('Year')
              setContainerIsActive(false)
            }}
          >
            Year
          </li> */}
          {years.reverse().map((year, index) => {
            return (
              <li
                key={index}
                value={year}
                className={selectedValue == year ? s.active : ''}
                onClick={() => {
                  yearCallback(year)
                  setSelectedValue(year)
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
