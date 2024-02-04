import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import '../App.css'
const View = ({movies,deleteMovie}) => {
  return movies.map(movie=>(
    <tr key={movie.id}>
        <td><img src={movie.img} className="poster"></img></td>
        <td>{movie.title}</td>
        <td>{movie.rating}</td>
        <td className='delete-btn' onClick={()=>deleteMovie(movie.id)}>
          <Icon icon={trash}/>
        </td>
    </tr>
  ))
}

export default View;