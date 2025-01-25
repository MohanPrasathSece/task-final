// import React, { Suspense } from 'react';

// // Lazy load the component
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       {/* Use Suspense to show a fallback while the component is loading */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import './App.css'
import Auth from './Auth'
import User from './User'

const Authorized=Auth(User);

function App(){
  const user={name:"Mathi"};
  const isAuth=true;
  


  return (
    <>
   <Authorized isAuth={isAuth} user={user} />
    </>
  )
}



export default App