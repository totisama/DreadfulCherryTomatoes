import { type Movie as MovieType } from '../../types'
import styles from './Movie.module.scss'

export function Movie(props: {
  movie: MovieType
}) {
  const { movie } = props

  return (
    <div className={styles.movie}>
      <div className={styles.information}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.extra}>
          <p>{movie.releaseYear}</p>
          <h5>{movie.description}</h5>
        </div>
      </div>
      <img src={movie.images.posterArt.url} alt={movie.title} />
    </div>
  )
}
