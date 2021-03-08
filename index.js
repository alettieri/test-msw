import React from 'react'
import useFetch from 'use-http'

function Component() {
  const {loading, data} = useFetch('/resource/1', [])

  if(loading) {
    return <div>Loading</div>
  }

  return <div>{data.id}</div>
}

export default Component