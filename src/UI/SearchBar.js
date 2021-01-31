import React,{useState} from 'react'

const SearchBar = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange =(q)=>{
      setText(q)
      getQuery(q)

    }
    return (
       <section className="search">
         <form action="">
           <input 
             type="text"
             value={text} 
             onChange={(e) => onChange(e.target.value)}
             className="form-control" 
             placeholder="search characters"/>
          </form>
       </section>
    )
}

export default SearchBar
