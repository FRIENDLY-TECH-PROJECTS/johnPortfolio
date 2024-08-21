import Section from "../Section/Section"
import Wrapper from "../wrapper/Wrapper"
import './style.css'

export default function Blogs() {
  return (
    <Section variant="section1" >
     <Wrapper variant="wrapper1" titel="My Blogs">
        <div className="gallery">
        <img src="blog2.jpg" alt="Description 1" className="gallery-item" />
          <div className="sub-gallery">
          <img src="blog3.jpg" alt="Description 2" className="gallery-item" />
          <img src="blog1.jpg" alt="Description 3" className="gallery-item" />
          </div>
        </div>
     </Wrapper>
    </Section>
  )
}
