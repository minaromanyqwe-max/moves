import React from 'react'

export default async function Proid(id) {
  let res = await fetch(`https://fooapi.com/api/movies/${id}`, )

  let data = await res.json()
  return data
}