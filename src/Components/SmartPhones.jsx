import React from 'react'
import Cards from './Cards'

const SmartPhones = () => {
    return (
        <>
            <div>
                <h1 class="text-center p-2 text-2xl mt-5 font-bold">
                    Latest smart phones here
                </h1>
                <div class="mb-5">
                    <Cards />
                </div>

            </div>
        </>
    )
}

export default SmartPhones
