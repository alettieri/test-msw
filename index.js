import React from 'react'
import useFetch from 'use-http'


function Component() {
  // Uses the https://use-http.com/ library to fetch requests
  // useFetch will fire a GET request for /resource/1 as soon as this component mounts
  const {loading, data, error} = useFetch('/resource/1', [])

  if(loading) {
    return <div>Loading</div>
  }

  if(error) {
    return <div>Error</div>
  }

  // We would expect `data.id` to equate to "1", but it won't since data is still undefined
  return <div>{data?.id}</div>
}

export default Component