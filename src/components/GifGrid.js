import React from 'react'
import { GifItem } from './GifItem';
import { UseFetchGifs } from "../hooks/UseFetchGifs"

export const GifGrid = ({category}) => {

    const { data: images, loading } = UseFetchGifs(category)
    return(

    <>
        <h3>{category}</h3>

        {loading && <p>loading</p>}

        <div className='card-grid'>

            {
                images.map(image => (
                    <GifItem

                        key={image.id}
                        {...image}

                    />

                ))
            }
        </div>
    </>
    )
}
