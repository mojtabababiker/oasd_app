import React from "react";
import Image from "next/image";


export default function PartnersSlider() {
  return (
    <div className="partners-slider">
      <div className="slider-warper">
        <div className="slider-container">
          <Image className="image-slides" src={'/images/partners/image_1.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_2.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_3.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_1.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_2.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_3.png'} alt="Partner Image" width={80} height={80} />
        </div>
        <div className="slider-container">
          <Image className="image-slides" src={'/images/partners/image_1.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_2.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_3.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_1.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_2.png'} alt="Partner Image" width={80} height={80} />
          <Image className="image-slides" src={'/images/partners/image_3.png'} alt="Partner Image" width={80} height={80} />
        </div>
      </div>
    </div>
  )
}