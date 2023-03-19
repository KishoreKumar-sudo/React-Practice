import './App.css';
import api from './api/Axiosconfig'
import { useState, useEffect } from 'react'
function App() {
  //let's return a destructured array from the useState Hook
  //for thread functionality management we're using async await
  const [movies, setMovies] = useState();
//It will store an array of movie data returned from a call to the relevant API endpoint.
//The array is a function that can be used to change the state of the movies variable.
  const getMovies = async () => {
//when the state of variable tracked by react through the usestate hook is changed the component is re-rendered by the react.
//so the app component will be re-rendered when the state of the movies variable changes.
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data)
      setMovies(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }
  //Let's implement the useeffect hook so that getmovies function is executed when the app component 1st loads.  
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
