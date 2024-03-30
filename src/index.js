import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// // function App(props) {
// //   return(
// //     <h1>{props.saludo}, {props.nombre},</h1>
// //   )
// // }

// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWthSaludo(saludo) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo}/>
//           <p>Estamos acompañando al wrapped</p>
//         </React.Fragment>
//       )
//     }
//   }
// }

// const AppWithSaludo = withSaludo(App)("Wenas")

ReactDOM.render(
  // <AppWithSaludo nombre="Vane" />,
   <App /*saludo="Buenas" nombre="Vane"*/ />,
  document.getElementById('root')
);


