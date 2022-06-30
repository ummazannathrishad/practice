import React,{useRef} from 'react'
const Hooks = () => {

    const hookNameRef = useRef();
    const hookpasswordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const hookName = hookNameRef.current.value;
        const hookpassword = hookpasswordRef.current.value;
        hookNameRef.current.style.color = "red";
        console.log({hookName,hookpassword});
    }
  return (
      <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" ref={hookNameRef} />
        </div>
        <div>
        <label htmlFor="password">password:</label>
        <input type="password" id="password" ref={hookpasswordRef} />
        
    </div>
    <button type='submit'>Register</button>
    </form>
  );
}

export default Hooks;