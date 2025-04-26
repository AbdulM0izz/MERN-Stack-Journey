import React from 'react'
//if we import like import form it will block code make sync code
 
// import('./Add').then((result)=>{ //best practice
//     console.log("Result " + result.Add(5,5))
// })

const Lazy = React.lazy(()=> import('./Add').then((result)=>{
    console.log("Result" + result.Add(5,5))
}))

const Codesplilliting = () => {
  return (
    <Suspense fallback={<h2>Wait.....</h2>}>
      <h2>Codesplilliting</h2>
    </Suspense>
  )
}

export default Codesplilliting

// means we divide code in chuncks 
// like we have to use any heavy function so that file is in another file is code spilliting 

// Advantages : by this we can  elpelment lazy loading and suspense