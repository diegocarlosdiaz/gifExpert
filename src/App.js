import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const App = () => {

  const [categories, setCategories] = useState([])
  return (
    <>
      <h2>Gif Expert</h2>
      {
        <AddCategory
          setCategories={setCategories}
        />
      }

      <ol>

        {

          categories.map((category, index) => (

            <GifGrid
            key = {AddCategory + index}
            category = {category}
            />

          ))

        }

      </ol>




    </>
  )
}

