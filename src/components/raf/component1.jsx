import React,{useState} from 'react';
import Component2 from './component2';

const Component1 = () => {
    const [name, setName] = useState({id:101, describe:"i am student"});
  return (
    <div>
        <Component2 name={name}/>
    </div>
  )
}

export default Component1;