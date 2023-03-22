import { useState } from 'react';
import Cards from './components/Cards';

function App() {

  const [search,setSearch] = useState('')
  console.log(search)

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };

  const reload = () => {
    location.reload()
  }

  return (
    <>
      <div id="search">
        <h3 onClick={reload}>THE MOVIE APP</h3>
       <form id="form" onSubmit={handleSearch}>
            <input
                id="input" 
                type="text"
                placeholder="Search"
                autoComplete="off"
                name='search'
            />
        </form>
      </div>
      <div id="movies">
        <Cards search={search}/>
      </div>
    </>
  )
}

export default App
