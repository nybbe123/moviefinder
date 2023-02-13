import { useLocation } from 'react-router-dom'
import s from './Movie.module.scss'
import img from '../assets/thor.png'
import Header from '../components/layout/Header'
import BackButton from '../components/UI/BackButton'

export default function Movie() {
  const location = useLocation()
  const { movie } = location.state

  return (
    <div className={s.movieContainer}>
      <img
        src={img}
        alt="logo"
        className={s.movieBg}
      />
      <div className={s.topModal} />
      <div className={s.bottomModal} />
      <div className={s.contentContainer}>
        <div className={s.contentWrapper}>
          <BackButton />
          <h1>{movie.Title}</h1>
          <p className={s.genre}>{movie.Genre}</p>
          <div className={s.info}>
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
            <p>IMDb {movie.imdbRating}/10</p>
          </div>
          <p className={s.description}>{movie.Plot}</p>
        </div>
      </div>
      <Header />
    </div>
  )
}
