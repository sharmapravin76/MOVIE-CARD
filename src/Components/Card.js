



const Card=(props)=>{
   
    function addToCartHandler(){
        
        //  remove add to card remove cart 
        // if already done add cart than show the remove cart button 

            let movie={
                title:props.info.title,
                id:props.info.id,
                img:props.img,
                rating:props.info.vote_average

            }
            if(localStorage.getItem('movie')==null){
                localStorage.setItem('movie','[]'); //null when nothing there
            }
            if(localStorage.getItem(props.info.title)!==null){
                alert('Already exists');
            }else
            {
           const old_data=JSON.parse(localStorage.getItem('movie'));
           old_data.push(movie);

           localStorage.setItem('movie',JSON.stringify(old_data));}
        


    }
    return(
        <>
            <div className="movie">
                <img src={props.img} className="poster"></img>
                <div className="cart">
                <button onClick={()=>addToCartHandler()} ><h2>Add to Cart</h2></button>
                </div>
                <div className="movie-details">
                
                    <div className="box">
                        <h4 className="title">{props.info.title}</h4>
                        <p className="rating">{props.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>Overview</h1>
                        {props.info.overview}
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}
export default Card;