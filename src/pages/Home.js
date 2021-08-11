import React, { useState, useEffect } from 'react'

import axios from 'axios';
import Search from '../components/Search';
import CharactersGrid from '../components/CharactersGrid';
import Pagination from '../components/Pagination';


const Home = () => {
  const [items, setItems] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currpost, setCurrentPost] = useState(1)
  const [postperpage] = useState(10)
  // const [selected] = useState({})

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios.get(`https://breakingbadapi.com/api/quotes`)
      //console.log(result.data)
      setQuotes(result.data)
      setLoading(false)
    }
    fetchQuotes()
  }, [quotes])


  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setLoading(false)
    }
    fetchApi()
  }, [query])



  const apiurl = `https://breakingbadapi.com/api/characters?name=${query}`

  // Get current post
  const indexofLastPost = currpost * postperpage
  const indexofFirstPost = indexofLastPost - postperpage
  const currentPost = items.slice(indexofFirstPost, indexofLastPost)


  // For paginate the page
  const paginate = (pageNumbers) => setCurrentPost(pageNumbers) // PageNumber come from pagination file

  // open Popup
  const openPopup = (id) => {
    axios(apiurl + id).then(({ data }) => {
      let items = data;
      console.log(items)
      setItems(prevState => {
        return { ...prevState, selected : items }
      });
    });
  }

  // close Popup
  //const closePopup = () => {
  //   setItems(prevState => {
  //     return { ...prevState, selected: {} }
  //   });
  // }


  return (
    <div className="App">
      <main>
        <Search getQuery={(q) => setQuery(q)} />
         <CharactersGrid 
           items={currentPost} 
           isLoadingng={loading} 
           openpopup={openPopup} 
           quotes = {quotes}/>

        {/* {(typeof selected.Title != 'undefined') ?
          <Popup selected={selected}

            closepopup={closePopup} /> : false} */}

        <Pagination
          postPerPage={postperpage}
          totalPosts={items.length}
          paginate={paginate} />
      </main>
    </div>
  )
}

export default Home




