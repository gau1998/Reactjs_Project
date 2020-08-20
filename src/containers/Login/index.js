import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from '../../image/avatar.svg';
import bg from '../../image/bg.svg';
import wave from '../../image/wave.png';
import './style.scss';

const Login =()=> {
    const [product, setProduct] = useState({
      email: "",
      password: "",
    });
     
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct({ ...product, [name]: value });
  
      console.log(product)
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
       
    }

    return (
      <div>
        <div>
          <img className="wave" src={wave} alt="wave" />
          <div className="container contain ">
            <div className="img">
              <img src={bg} alt="bg" />
            </div>
            <div className="login-content">
              <form onSubmit={handleSubmit}>
                <img src={avatar} alt="avatar" />
                <h2 className="title">Welcome</h2>

                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa fa-user" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="email"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa fa-lock" />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      
                      placeholder="Password"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Link to="/forgetPassword">Forgot Password?</Link>
                <button className="btnn btn-success don">LOGIN</button>
                <Link to="/register">
                  <button className="btnn btn-success don">REGISTER</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

function mapStateToProps(props) {
  return {
    ...props,
  };
}

export default connect(mapStateToProps)(Login);
