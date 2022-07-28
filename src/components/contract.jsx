import React from 'react';


const Contract = () => {
  

  return (
    <>
     <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-side">
              <h2>send us a message</h2>
              <form className="all-form">
              <div className="form-outline mb-4">
                                    <input type="text" id="form4Example1" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-outline mb-4">
                                    <input type="text" id="form4Example1" className="form-control" placeholder="email"/>
                                    
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="form4Example1" className="form-control" placeholder="Message"/>
                                    
                                </div>
                                <button type="submit" className="btn btn-custom btn-custom-size btn-block mb-4">
                                    Send
                                </button>
              </form>
              
          </div>
        </div>

      </div>
      </div>
      </div>
      </>
     
  );
};

export default Contract;
