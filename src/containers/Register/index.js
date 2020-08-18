import React, { useState } from 'react';
import '../Register/style.scss';
import bg from '../../image/bg.svg';

const Register = () => {
  const [product, setProduct] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="contain ">
      <div className="img">
        <img src={bg} alt="bg" />
      </div>
      <form className="register">
        <div className="form-group">
          <h3 className="header">REGISTER</h3>
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btnn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
