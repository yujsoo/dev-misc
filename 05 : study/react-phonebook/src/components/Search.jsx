import React from 'react'

const Search = () => {
  return (
    <div className='search-box'>
        <input type="text" placeholder='이름이나 전화번호를 입력하세요' />
        <button>검색</button>
    </div>
  )
}

export default Search