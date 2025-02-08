import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import './index.css'
// import Cbc from './component/Cbc'
// import Fbc from './component/Fbc'
// import Props from './component/Props'
// import Parent from './component/Parent'
// import Child from './props/Child'
// import State from './state/State'
// import Inline from './styles/Inline'
// import Comp1 from './styles/Comp1.jsx'
// import "../src/styles/globally.css"
// import External from './styles/External.jsx'
import Ref from './useRef/Ref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Cbc/>
  <Fbc/>
  <Props/>
  <Parent/>
  <Child/> */}
  {/* <State/> */}
  {/* <Inline/> */}
  {/* <Comp1/> */}
  {/* <External/> */}
  <Ref/>

  </StrictMode>,
)
