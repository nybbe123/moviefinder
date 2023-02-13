import { ReactNode } from 'react'
import s from './Button.module.scss'

interface ButtonProps {
  onClick?: () => void
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  customClass?: string
  isDisabled?: boolean
}

export default function Button({
  children,
  type,
  onClick,
  customClass,
  isDisabled
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <button
      type={!type ? 'button' : type}
      onClick={onClick}
      className={`${s.btn} ${customClass}`}
      disabled={isDisabled ? true : false}
    >
      {children}
    </button>
  )
}
