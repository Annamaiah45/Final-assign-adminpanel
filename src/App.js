// import React, { useState } from "react";
// import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header.js";
// import Pages from "./pages/Pages.js";
// import Footer from "./components/Footer.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="padding-class">
//           <Pages />
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// library.add(fab, fas, far);


import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="padding-class">
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;