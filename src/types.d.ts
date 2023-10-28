declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export interface APIResults {
  total: number
  entries: Movie[]
}

export interface Movie {
  title: string
  description: string
  images: Images
  releaseYear: number
}

export interface Images {
  posterArt: PosterArt;
}

interface PosterArt {
  url: string;
  width: number;
  height: number;
}
