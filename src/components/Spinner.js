import loading from './loading.gif'
import React from 'react'

const Spinner = () => {

    return (
      <div className="text-center my-5">
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
}

export default Spinner