// import React from 'react'

// const Ref = () => {
//     let demo = document.getElementById
//   return (
//     <>
//      <h1 id='demo'>hello-world</h1>
//     </>
//   )
// }

// export default Ref


// 

import React, {useRef } from 'react'
import video from "./video.mp4"

const Ref = () => {
    let ref1 = useRef()
    console.log(ref1.current);
    let [state , setstate]= useState(true)

    let demo = () => {
        setState(!state)
        state === true ? ref1.current.play() : ref1.current.pause()

  return (
    <div>
        <video ref={ref1} src={video} style={{height:"300px"}}
         onClick={demo}></video>
    </div>
  )
}

export default Ref
