import {useState,useEffect} from 'react'
import bgDesktop from './images/pattern-divider-desktop.svg'
import bgMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'




function App() {
  const [advice,setAdvice]=useState({
    id:null,
    text:null
  })

const fetchAdvice= async ()=>{
const request= await fetch('https://api.adviceslip.com/advice')
const response=await request.json()
console.log(response.slip)
setAdvice({
  id:response.slip.id,
  text:response.slip.advice

})

}

useEffect(()=>{
let adviceTime=setTimeout(()=>{
  fetchAdvice()
},1000)

return(()=>{
  clearTimeout(adviceTime)
})

},[])

  return (
    <div className="container">
      <h1>{advice.id}</h1>
      <p>{advice.text}</p>

      <picture>
      <source media='(min-width:768px)'  srcSet={bgDesktop}/>
      <img src={bgMobile} alt='bg-desktop' />
      </picture>

      <div>
      <button onClick={fetchAdvice}>
      <img src={dice} alt='dice' />
      </button>
      </div>
    </div>
  );
}

export default App;
