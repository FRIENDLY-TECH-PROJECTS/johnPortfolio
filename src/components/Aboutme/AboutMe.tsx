import Section from "../Section/Section";
import Wrapper from "../wrapper/Wrapper";
import './style.css'
import Data from "./Data";



export default function AboutMe() {
  return (
    <Section variant="section1">
      <Wrapper variant="wrapper">
         <div className="about-left">
          
         </div>
         <div className="about-right">
          {Data.map((item, index) => (
            <div className="about-details">
              <h3 key={index}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))

          }
          
         </div>
      </Wrapper>
    </Section>
  )
}
