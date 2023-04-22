import { Carousel } from 'react-responsive-carousel';

const ImageSlider = () => {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1000}
      >
          <div>
              <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600" alt='img1'/>
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600" alt='img2'/>
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600" alt='img3'/>
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
    </>
  )
}

export default ImageSlider
