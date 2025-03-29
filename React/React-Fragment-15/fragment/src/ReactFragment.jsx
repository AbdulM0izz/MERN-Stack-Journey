
import React from 'react'
const ReactFragment = () => {
    //when we rap content in div we saw entra div in root div which is not good practice.
    //so For this we use react fragment rap content in <>this</> or <React.Fragment></React.Fragment> 

  return (
    //   <>
    //   <h2>React Fragment</h2>
    //   <p>Hello word</p>
    //   </>
    <React.Fragment>
        <h2>React Fragment</h2>
        <p>Hello word</p>
    </React.Fragment>
  
  )
}

export default ReactFragment