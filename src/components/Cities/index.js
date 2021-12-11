import React, {useState, useEffect} from 'react'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCities()
    //eslint-disable-next-line
  }, [])

  const getCities = async () => {
    setLoading(true)
    const res = await fetch('/cities')
    const data = res.json()

    setCities(data)
    setLoading(false)
  }

  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">Cities</h4>
      </li>
      {!loading && cities.length === 0 ? (<p className="center">No cities to show...</p>) : (
         cities.map(city => {
           <li>{`${city.name}, ${city.country}`}</li>
         })
      )}
       
    </ul>
  )
}

export default Cities