import { useLocation } from 'react-router-dom'
import s from './Movie.module.scss'
import Header from '../components/layout/Header'
import BackButton from '../components/UI/BackButton'
import { useEffect } from 'react'

export default function Movie() {
  const location = useLocation()
  const { movie } = location.state

  useEffect(() => {
    document.title = `movies - ${movie.Title}`
  }, [])

  return (
    <div className={s.movieContainer}>
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
        {!!movie.Poster && movie.Poster !== 'N/A' && (
          <div className={s.imgBgContainer}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className={s.imgBg}
            />
            <img
              src={movie.Poster}
              alt={movie.Title}
              className={s.movieBg}
            />
          </div>
        )}
      </div>
      <div className={s.topModal} />
      <div className={s.imageModal} />
      <Header />
    </div>
  )
}
