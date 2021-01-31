import React,{useState, useEffect}  from 'react'
import './App.css';
import CharactersGrid from './components/CharactersGrid'
import SearchBar from './UI/SearchBar'
import Header from './UI/Header'
import Pagination from './components/Pagination'
import axios from 'axios'
function App() {
  const [items, setItems]  = useState([])
  const [loading, setLoading]  = useState(true)
  const [query, setQuery]  = useState('')
  const [currpost, setCurrentPost]  = useState(1)
  const [postperpage]  = useState(8)

   useEffect (()=>{
      const fetchApi = async () =>{
      const result = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`)
          console.log(result.data)
          setItems(result.data)
          setLoading(false)
      }
      fetchApi()
  },[query])

  // Get current post
    const indexofLastPost = currpost * postperpage
    const indexofFirstPost = indexofLastPost - postperpage
    const currentPost = items.slice(indexofFirstPost,indexofLastPost)
  // For paginate the page
  
  const paginate = (pageNumbers) => setCurrentPost(pageNumbers) // PageNumber come from pagination file

  
  return (
      
          
           <div className='container mx-auto'>
            
                <Header/>
          
                <SearchBar getQuery={(q) => setQuery(q)}/>
                <CharactersGrid items={currentPost} isLoadingng= {loading}/>
                <Pagination postPerPage= {postperpage} totalPosts = {items.length} paginate= {paginate}/>
               
            </div>
      
          
   
  )
  
}

export default App;
