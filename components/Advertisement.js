import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";


const Advertisement = ({ adv }) => {
  return (
    <>
      <Slider {...settings}>
        {
          adv?.map((item, id) => (
            <div>
              <Link href={item.url} key={id} target="_blank">
                <img src={item.image.url} alt={item.title} className='max-w-[364px] h-[364px] w-full object-cover'/>
              </Link>
            </div>
          ))
        }
      </Slider>
    </>
  )
}

export default Advertisement

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
};