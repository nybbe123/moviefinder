import { ReactNode } from 'react'
import s from './Button.module.scss'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  customClass?: string
}

export default function Button({
  children,
  type,
  onClick,
  customClass
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <button
      type={!type ? 'button' : type}
      onClick={onClick}
      className={`${s.btn} ${customClass}`}
    >
      {children}
    </button>
  )
}
