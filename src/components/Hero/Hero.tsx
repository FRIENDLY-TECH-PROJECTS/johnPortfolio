import Section from "../Section/Section";
import Wrapper from "../wrapper/Wrapper";
import './style.css'
import Data from "./Data";
import Button from "../ui/buttons/Button";


export default function Hero() {
  return (
    <Section variant="section">
     <Wrapper variant="wrapper">
      <div className="left">
        {Data.map((item, index) => (
          <div className="details">
            <h3 key={index}>{item.greeting}</h3>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
          
        ))}
        <div className="btns">
        <Button variant="btn1">
          contact me
        </Button>
        <Button variant="btn2">
          About me
        </Button>
        </div>
      </div>
    
     </Wrapper>
    </Section>
  )
}
