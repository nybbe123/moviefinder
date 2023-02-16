import s from './Card.module.scss'

interface Props {
  children: React.ReactNode
  customClass?: string
}

export default function Card({ children, customClass }: Props) {
  return <div className={`${s.cardContainer} ${customClass}`}>{children}</div>
}
