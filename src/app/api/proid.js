export default async function Proid(id) {
  const res = await fetch(`https://fooapi.com/api/movies/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch movie data')
  }
  return res.json()
}
