// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import avatar from '../../image/avatar.svg';
// import bg from '../../image/bg.svg';
// import wave from '../../image/wave.png';
// import './style.scss';

// class Login extends Component {
//   constructor() {
//     super();
//     const Token = localStorage.getItem('Token');
//     // let loggedin = true;
//     if (Token == null) {
//       loggedin = false;
//     }
//     this.state = {
//       email: '',
//       password: '',
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleInputChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     // this.props.dispatch(loginUser(this.state))
//   }
//   render() {
    
//     return (
//       <div>
//         <div>
//           <img className="wave" src={wave} alt="wave" />
//           <div className="container contain ">
//             <div className="img">
//               <img src={bg} alt="bg" />
//             </div>
//             <div className="login-content">
//               <form onSubmit={this.handleSubmit}>
//                 <img src={avatar} alt="avatar" />
//                 <h2 className="title">Welcome</h2>

//                 <div className="input-div pass">
//                   <div className="i">
//                     <i className="fas fa-user" />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="email"
//                       className="form-control"
//                       value={this.state.email}
//                       placeholder="username"
//                       onChange={this.handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="input-div pass">
//                   <div className="i">
//                     <i className="fas fa-lock" />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       value={this.state.password}
//                       placeholder="Password"
//                       onChange={this.handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <Link to="/forgetPassword">Forgot Password?</Link>
//                 <button className="btnn btn-success don">LOGIN</button>
//                 <Link to="/register">
//                   <button className="btnn btn-success don">REGISTER</button>
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// function mapStateToProps(props) {
//   return {
//     ...props,
//   };
// }

// export default connect(mapStateToProps)(Login);
