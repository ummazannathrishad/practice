import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { blogsData } from './data';
import practice from '../vendor/images/practice_B.png';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const truncateSting=(str, num)=>{
    if(str.length> num){
      return str.slice(0, num) +"..."
    }
    else{
      return str;
    }
  }
  console.log(blogs);
  return (
    <div>
        <h1>Blog page</h1>
        <section>
          {blogs.map((blog)=>{
            const {id, title, body} = blog
            return(
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateSting(body,100)}</p>
              <Link to={title} state={{id,title,body}}>Learn More</Link>
              <img src={practice}  alt="image"/>
              
            
             

            </article>
            );
          })}
        </section>
    </div>
  );
};

export default Blogs;