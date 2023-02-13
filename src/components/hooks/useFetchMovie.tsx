export async function UseFetchMovie(title: string, year?: string) {
  return await fetch(
    `http://www.omdbapi.com/?apikey=${
      process.env.REACT_APP_API_KEY
    }&t=${title}${year ? `&y=${year}` : ''}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        return response.json()
      }
    })
    .then((data) => {
      if (data.Response && data.Response == 'False') {
        return 'false'
      } else {
        return data
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
