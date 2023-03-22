import React from 'react'

export default function Header() {
  return (
    <div id="search">
        <h3>THE MOVIE APP</h3>
       <form id="form">
            <input
                id="input" 
                type="text"
                placeholder="Search"
                autoComplete="off"
            />
        </form>
    </div>
  )
}
