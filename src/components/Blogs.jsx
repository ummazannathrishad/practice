import React,{useState} from 'react';
import { blogsData } from './data';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  console.log(blogs);
  return (
    <div>
        
    </div>
  );
};

export default Blogs;