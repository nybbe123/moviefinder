import { useNavigate } from 'react-router-dom'
import s from './BackButton.module.scss'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className={s.backBtn}
    >
      <div className={s.btnCircle}>
        <ArrowIcon />
      </div>
      Back home
    </button>
  )
}
