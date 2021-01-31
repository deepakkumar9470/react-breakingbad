import React from 'react'
import '../App'
import CharatersItems from './CharatersItems'
import Spinner from '../UI/Spinner'
const CharactersGrid = ({items, isLoading}) => {
   return isLoading ? <Spinner/> : 
      <section className="cards my-5">
            {
               items.map((item)=>
                 <CharatersItems key={item.char_id} item = {item}/>
               )
            }
     </section>
}

export default CharactersGrid
