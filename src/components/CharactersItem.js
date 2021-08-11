import React from 'react'



const CharatersItems = ({ item }) => {
   return (
      <div className="card">
         <div className="card-inner">
            <div className="card-front">
               <img src={item.img} alt="charimage" />
            </div>
            <div className="card-back">
               <h1>{item.portrayed}</h1>
               <ul>
                  <li>
                     <strong>Actor Name:</strong> {item.name}
                  </li>
                  <li>
                     <strong>Nickname:</strong> {item.nickname}
                  </li>

                  <li>
                     <strong>Birthday:</strong> {item.birthday}
                  </li>
                  <li>
                     <strong>Occupation:</strong> {item.occupation[0]}
                  </li>
                  <li>
                     <strong>Status:</strong> {item.status}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CharatersItems
