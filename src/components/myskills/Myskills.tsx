import Section from "../Section/Section";
import Wrapper from "../wrapper/Wrapper";

import './style.css'

export default function Myskills() {
  return (
    <Section variant="section1">
    <Wrapper variant="wrapper1" titel="My skills">
    <div className="icon-container">
 
        <div className="icons">

        <div className="icon"> 
            <img src="./py.svg" />
            <span>PYTHON</span>
            </div>
            <div className="icon">
            <img src="./react.svg" />
            <span>REACT</span>
            </div>
            <div className="icon">
            <img src="./css.svg" />
            <span>CSS</span>
            </div>
            <div className="icon">
            <img src="./html.svg" />
            <span>HTML</span>
            </div>
            <div className="icon">
            <img src="./js.svg" />
            <span>JAVASCRIPT</span>
            </div>
        </div>
           
          </div>

    </Wrapper>

    </Section>
  )
}
