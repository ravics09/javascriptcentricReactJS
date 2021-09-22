import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            JavaScript Centric
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <Link class="nav-link" to="/signin">
                  SignIn
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <Link class="navbar-brand" to="/">
//             JavaScript Centric
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarScroll"
//             aria-controls="navbarScroll"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarScroll">
//             <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
//               <li class="nav-item">
//                 <Link class="nav-link" to="/signin">
//                   SignIn
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link" to="/signup">
//                   SignUp
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
export default NavBar;
