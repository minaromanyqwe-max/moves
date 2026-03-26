export default async function Product() {
  const res = await fetch(`https://fooapi.com/api/movies`)
  if (!res.ok) {
    throw new Error('Failed to fetch movies data')
  }
  return res.json()
}

