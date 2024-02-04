import { getDefaultNormalizer } from "@testing-library/react";
import react,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
import Card from "./Card";
import Cart from './Cart'
import { AiOutlineShoppingCart } from "react-icons/ai"

let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Theatre","Kids","Drama","Comedie"];
let img_path="https://image.tmdb.org/t/p/w500";


const Main=()=>{


    
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    const [fdate,setfdate]=useState();
    const [tdate,settdate]=useState();
    useEffect(()=>{

        
        ////


        // cart -->

        // red color count cart logo 
        // inc. and dec the card count 

        // check if anything is present in the localStoage-->

        // []-> empty array or data is there  

        // if data is there --> axios call for each title . 
        
        // state setState  -->  image , content , rating, title , price 
        // |---|
        // |___|
        // |___|

        // remove cart add cart .

        // 
        /////https://api.themoviedb.org/3/discover/movie?api_key=f78a2d691f45fb1d778e84334a52b51c&release_date.gte=2022-07-01&release_date.lte=2022-07-10&with_release_type=2|3
            

        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{
        if(movieType=="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedie")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url="https://api.themoviedb.org/3/search/movie?api_key=f78a2d691f45fb1d778e84334a52b51c&query="+search;
            setUrl(url);
            setSearch("");
        }
    }


    const sortMovie = event => {
        event.preventDefault();
        url="https://api.themoviedb.org/3/discover/movie?api_key=f78a2d691f45fb1d778e84334a52b51c&release_date.gte="+fdate+"&release_date.lte="+tdate+"&with_release_type=2|3"
            console.log(fdate+ " "+tdate);
            setUrl(url);
            setfdate("");
            settdate("");

    }
    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        {
                            arr.map((value,pos)=>{
                                return(
                                    <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                )
                                
                            })
                           
                        }
                       
                    </ul>
                    
                </nav>
                <form>
                     
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} onKeyPress={searchMovie}>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                        
                    
                </form>
                <form onSubmit={sortMovie}>
                    <div>
                        <label>Enter date from:</label>
                        <input
                        type="date"
                        format="dd-mm-yyyy"
                        placeholder="Enter date from:"
                        onChange={(e)=>{setfdate(e.target.value)}} 
                        value={fdate}
                        />
                    </div>
                    <div>
                        <label>Enter date to:</label>
                        <input
                        type="date"
                        placeholder="Enter date to:"
                        onChange={(e)=>{settdate(e.target.value)}} 
                        value={tdate}
                        />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
            
            <div className="container">
                {
                    
                    (movieData.length==0)?<p className="notfound">Not Found</p>:
                     movieData.map((res,pos)=>{
                        return(
                            <Card 
                            info={res} 
                            img={img_path+res.poster_path}
                            key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;