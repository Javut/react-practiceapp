import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

//   const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const [categories, setCategories] = useState(['Dragon Ball']);

// const hanldeAdd = () => {

//     setCategories(['Spiderman', ...categories]);

// }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        <button>Agregar</button>
        
        <ul>
        
            {
                categories.map(category =>
                   <GifGrid 
                    key={category}
                    category={category}/>
                )
            }
        </ul>
    
    </>
  )
}
