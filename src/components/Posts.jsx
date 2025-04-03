import { useEffect, useState } from "react";
import { getPost } from "../api/Postapi";
import "../App.css";
import { Form } from "./Form";

export const Posts = () => {

    const [data , setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({});

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
    };

    useEffect(()=> {
        getPostData();
    }, []);

    // Function to Delete Post

    const handleDeletePost = async(id) => {
        try {
            const res= await handleDeletePost
        } catch (error) {
            console.log(error);
        }

    };

    // Function to Edit Post

    const handleUpdatePost = () => {
        
    }




    return (
        <>
        <section className="section-form">
            <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
        </section>
        <section className="section-post">
            <ol>
                {
                    data.map((curElem) => {
                        const { id, body, title} = curElem;
                        return (
                            <li key={id}>
                                <p>Title: {title}</p>
                                <p>Body: {body}</p>
                                <button  onClick={() => handleUpdatePost(curElem)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
        </>
    ) 
}