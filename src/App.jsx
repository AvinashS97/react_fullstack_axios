// import { Movie } from "./pages/Movie";
import { useEffect } from "react";
import { getPost } from "./api/Postapi";


const App = () => {
  const getPostData = async() => {
    const res = await getPost();
    console.log(res);
  }

  useEffect(()=> {
    getPostData();
  })

  return <h1>  Hello React CRUD Operation </h1>
};

export default App;