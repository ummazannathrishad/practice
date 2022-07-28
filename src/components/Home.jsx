import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const button = useNavigate();
  return (
    <div>
        <h1>Home page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ut corporis dicta eligendi voluptas. Ipsum reiciendis minus quasi itaque amet, autem voluptatem repellendus earum et eum placeat voluptas illo aut totam laborum! Eos qui vel provident architecto magnam dolorem consequuntur, doloribus, error est delectus exercitationem quam odit placeat debitis nisi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae et consequatur. Quos porro repellendus debitis! Asperiores, suscipit? Culpa harum ullam vel, quia explicabo adipisci deserunt maiores dignissimos quis placeat.</p>
        <button onClick={()=>{
          button("/Contract")
        }}>go to contact </button>
    </div>
    
  );
};

export default Home;