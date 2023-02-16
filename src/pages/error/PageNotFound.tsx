import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import s from './PageNotFound.module.scss'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className={s.pageNotFoundContainer}>
        <div className={s.pageNotFoundWrapper}>
          <h1>Ooops...</h1>
          <p className={s.subTitle}>The videotape broke</p>
          <p className={s.breadText}>
            The 404 error message means that the page you are looking for cant
            be found. Dont worry, just press the button below to go back home
          </p>
          <Link
            to={'/'}
            className={s.linkBtn}
          >
            Back home
          </Link>
        </div>
      </div>
    </>
  )
}
