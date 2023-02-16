import { useNavigate } from 'react-router-dom'
import s from './BackButton.module.scss'
import { ReactComponent as ArrowIcon } from '../../assets/svg/backArrow.svg'

interface Props {
  customClass?: string
}

export default function BackButton({ customClass }: Props) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className={`${s.backBtn} ${customClass}`}
    >
      <div className={s.btnCircle}>
        <ArrowIcon />
      </div>
      Back home
    </button>
  )
}
