import './App.css';
import { useState, useEffect } from "react";

// {}
// []

function Products(){

const [item, setItem] = useState({
             "id": 1,
             "imageUrl": "some url here",
             "name": "Product name",
             "count": 4,
             "size": {
                     "width": 200,
                     "height": 200
             },
             "weight": "200g",
             "comments": ["CommentModel", "CommentModel"]
     })
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  )

useEffect(()=>{
	    localStorage.setItem("items", JSON.stringify(items))
	  }, [items])
	
function details() {
	const idName = "details_" + item.id;
	const getDetails = document.getElementById(idName);
        return getDetails.childNodes.forEach((value)=> { 
                         if(value.style.display === "none"){
		              value.style.display = "block"
	}
		else{
                  value.style.display = "none"
		}
	});
	}
	return (
	<div className="product">
	  <p>{item.name}</p>
	  <img src={item.imageUrl} alt="This is image"/>
	<button className="detailsButton" onClick={details}>details</button>
	<div id={"details_" + item.id}>
	  <p style={{display:"none"}}>Amount: {item.count}</p>
	  <p style={{display:"none"}}>Weight: {item.weight}</p>
	  <p className="comments" style={{display:"none"}}>Name: {item.comments[0]} <br /> Comment: {item.comments[1]}</p>
	</div>
	<div>
	          <button>Add</button>
	          <button>Delete</button>
	</div>
	</div>
	)
}

function App() {
  return ( <>
	  <Products />
	  </>
  )
}

export default App;
