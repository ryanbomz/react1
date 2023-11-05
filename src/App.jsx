// const App = () =>{
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// };

// export default App;

// function App() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// export default App

// function App(){
//   return(
//     <div>
//       <h1>welcome</h1>
//     </div>
//   )
// }

// export default App
import Navbar from "./component/navbar";
import Footer from "./component/footer"


const App = () => {
  // let name = "deri";
  // let isSingle = true;
  // const renderStatus = (param) => {
  //   if (param) {
  //     return <h2>saya sudah menikah</h2>;
  //   } else {
  //     return <h2>saya belum menikah</h2>;
  //   }
  // }
  
  return (
    <div>
      {/* <h2>hai {name} </h2>
      <h2>saya {isSingle ? 'menikah' : 'Belum menikah'} </h2>
      {renderStatus(true)} */}
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

