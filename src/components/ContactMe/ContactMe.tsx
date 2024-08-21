
import { Form } from "../Form/Form";
import Section from "../Section/Section";
import Wrapper from "../wrapper/Wrapper";
import './style.css'


export default function ContactMe() {


  return (
    <Section variant="section1">
        <Wrapper variant="wrapper">
         <div className="contactme-left" >
            <h1>Get in touch</h1>
            <p>Feel free to contact me</p>
          
         </div>
         <div className="contactme-right">
           <Form />
          
         </div>
        </Wrapper>
    </Section>
  )
}
