import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyForm from "./components/form/ApplyForm";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<ApplyForm />} />
//         </Routes>
//       </Router>
//       {/* <Registration />
//       <Login /> */}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <Routes>
           <Route path="/" element={<ApplyForm />} />
         </Routes>
       </Router>
       {/* <Registration />
       <Login /> */}
    </div>
    )
  }
}
