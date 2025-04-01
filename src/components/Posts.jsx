import { useEffect } from "react";
import { getPost } from "../api/Postapi";

export const Posts = () => {
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
    };

    useEffect(()=> {
        getPostData();
    }, []);

    return <h1> Post Page</h1>
}

// 06:35