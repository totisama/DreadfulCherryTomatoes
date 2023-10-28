import { getMovies } from '../../services/getMovies'
import { type APIResults, type Movie as MovieType } from '../../types.d'
import { Movie } from '../Movie/Movie'
import { Paginator } from '../Paginator/Paginator'
import { Search } from '../Search/Search'
import styles from './Home.module.scss'
import { useEffect, useState, useRef } from 'react'

export function Home() {
  const [movies, setMovies] = useState<MovieType[]>([])
  const [currentPage, setcurrentPage] = useState(0)
  const [totalPages, setTotalPage] = useState(1)
  const originalMovies = useRef<MovieType[]>([])
  const moviesPerPage = 10

  const handleSearch = (search: string) => {
    if (search.length <= 0) {
      paginateMovies(0)
      setTotalPage(Math.ceil(originalMovies.current.length / moviesPerPage))

      return
    }

    const newMovies = originalMovies.current.filter(movie => {
      return movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    paginateMovies(0, newMovies)
    setTotalPage(Math.ceil(newMovies.length / moviesPerPage))
  }

  const handlePagination = (page: number) => {
    if (page < 0 || page >= totalPages) {
      return
    }

    paginateMovies(page)
    setcurrentPage(page)
  }

  const paginateMovies = (page: number, movies: MovieType[] = originalMovies.current) => {
    const startIndex = (page) * moviesPerPage
    const endIndex = startIndex + moviesPerPage
    const newMovies = movies.slice(startIndex, endIndex)

    setMovies(newMovies)
  }

  useEffect(() => {
    getMovies()
      .then(data => {
        const { entries, total } = data as APIResults

        const sortedMovies = entries.toSorted((a, b) => {
          return a.releaseYear - b.releaseYear || a.title.localeCompare(b.title)
        })

        originalMovies.current = sortedMovies
        paginateMovies(0)
        setTotalPage(Math.ceil(total / moviesPerPage))
      })
      .catch(err => { console.error(err) })
  }, [])

  return (
    <>
      <Search handleSearch={handleSearch} />
      <main className={styles.home}>
        <h1>Popular Movies</h1>
        <section className={styles.moviesContainer}>
          {movies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </section>
        <Paginator totalPages={totalPages} currentPage={currentPage} handlePagination={handlePagination} />
      </main>
    </>
  )
}
