
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Watch from "./components/Watch";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

// const appRouter=createBrowserRouter([
//   {
//     path:'/',
//     element:<Body/>,
//     children:[
//       {
//         path:'/',
//         element:<Content/>
//       },
//       {
//         path:'/watch',
//         element:<Watch/>
//       }
//     ]
//   }

// ]);

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Header/> */}
      {/* <RouterProvider router={appRouter}/> */}
    </div>
  );
}

export default App;
