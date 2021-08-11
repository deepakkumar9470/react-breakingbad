import React from 'react'
import '../App'
import CharatersItems from '../components/CharactersItem'


const CharactersGrid = ({ items, openpopup}) => {
   return (
      <section className="cards my-5">
         {
            items.map((item) => {
               return (
                  <div key={item.char_id}>

                     <CharatersItems
                        key={item.char_id} 
                        item={item} 
                        id={items.char_id}
                        openpopup = {openpopup}
                         />
                       
                  </div>
               )
            }



            )
         }

       

      </section>
   )
}

export default CharactersGrid
