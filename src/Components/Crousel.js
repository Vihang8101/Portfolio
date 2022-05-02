import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
function Crousel(props) {
    return(
<>

<div >
     
      <Carousel className='mt-lg-5 mt-0 pt-1'>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://source.unsplash.com/collection/190727/1600x900 "
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://source.unsplash.com/1600x900/?mountain"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://source.unsplash.com/1600x900/?nature,water"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="clearflix"></div>
</>
    )




}
export default Crousel;