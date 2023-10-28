import { type APIResults } from "../types.d"

const API_URL = 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json'

export const getMovies = async (): Promise<APIResults> => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    console.error('Error fetching Movies')
    return { entries: [], total: 0 }
  }

  const { entries, total } = await response.json() as APIResults

  return { entries, total }
}