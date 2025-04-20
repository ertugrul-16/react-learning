import axios from "axios";

export const getData = async(number)=>{
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number);


    console.log("user",user);
    console.log("posts",posts);

}


export default getData;