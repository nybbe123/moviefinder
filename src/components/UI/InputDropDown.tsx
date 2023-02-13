import s from './InputDropDown.module.scss'
import { DUMMY_YEARS } from '../../data/dummyData'
import { useState } from 'react'
import { ReactComponent as ArrowUpIcon } from '../../assets/svg/arrow.svg'

interface Props {
  yearCallback: (val: string) => void
}

export default function DropDownInput({ yearCallback }: Props) {
  const [selectedValue, setSelectedValue] = useState('Year')
  const [containerIsActive, setContainerIsActive] = useState(false)

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
          {DUMMY_YEARS.map((year) => {
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
                {year}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
