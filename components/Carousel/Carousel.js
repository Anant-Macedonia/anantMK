import { Carousel } from "react-bootstrap";
import classes from "./carousel.module.css";

const CustomCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className={classes.image}
          src="https://picsum.photos/seed/picsum/1000/1200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className={classes.image}
          src="https://picsum.photos/1000/1200?grayscale"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className={classes.image}
          src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
