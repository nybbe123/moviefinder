import { useLocation } from 'react-router-dom'
import s from './Movie.module.scss'
import Header from '../components/layout/Header'
import BackButton from '../components/UI/BackButton'

export default function Movie() {
  const location = useLocation()
  const { movie } = location.state

  return (
    <div className={s.movieContainer}>
      {/* <div className={s.imgBgContainer}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className={s.imgBg}
        />
      </div> */}
      <div className={s.contentContainer}>
        <div className={s.contentWrapper}>
          <div className={s.backBtnContainer}>
            <BackButton />
          </div>
          <h1>{movie.Title}</h1>
          <p className={s.genre}>{movie.Genre}</p>
          <div className={s.info}>
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
            <p>IMDb {movie.imdbRating}/10</p>
          </div>
          <p className={s.description}>{movie.Plot}</p>
        </div>
        <div className={s.imgBgContainer}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className={s.movieBg}
          />
          <img
            src={movie.Poster}
            alt={movie.Title}
            className={s.imgBg}
          />
        </div>
      </div>
      <div className={s.topModal} />
      <div className={s.imageModal} />
      <Header />
    </div>
  )
}
