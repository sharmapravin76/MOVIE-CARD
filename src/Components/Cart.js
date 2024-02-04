import React,{useState} from 'react'
import View from './View';
import '../table.css'

const getDatafromLs=()=>{
  const data=localStorage.getItem('movie');
  if (data){
    return JSON.parse(data);

  }
  else{
    return []
  }
}




const Cart = () => {
  const [movies,setMovies]=useState(getDatafromLs());
  //remove from cart
const deleteMovie=(id)=>{
  const filteredMovies=movies.filter((element,index)=>{
    return element.id !==id
  })
  setMovies(filteredMovies);
}
  return (
    <div className='table-wrap'>
      <h1 className='h1'>CART</h1>
      {movies.length >0 && <>
        <table className='table'>
          <thead className='thead-primary'>
            <tr>
              <th>&nbsp;</th>
              <th>TITLE</th>
              <th>RATING</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            <View movies={movies} deleteMovie={deleteMovie}/>
          </tbody>
        </table>
      </>}
      {movies.length < 1 && <div> Nothing added to cart </div>}
    </div>
  )
}

export default Cart;