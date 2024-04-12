import React, { useState } from 'react';
import F1 from './chad-montano-MqT0asuoIcU-unsplash.jpg';
import F2 from './lucas-andrade-3Uj0GwVmOeY-unsplash.jpg';
import F3 from './victoria-shes-UC0HZdUitWY-unsplash.jpg';
import F4 from './anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg';
import F5 from './istockphoto-1473452859-1024x1024.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const sliders = [F1, F2, F3, F4, F5];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (

    <div className='py-16'>
    <div className='max-w-[1400px] md:h-[800px] w-full m-auto px-4 relative group overflow-hidden'>
      <div>
        <img className='w-full h-full rounded-2xl bg-center bg-cover duration-500' src={sliders[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>

      <div className='absolute top-[50%]  -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer md:top-[50%]'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className='absolute top-[50%]  -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer md:top-[50%]'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      
    </div>

    <div className='flex justify-center py-2'>
        {sliders.map((slide, slideIndex) => (
          <RxDotFilled key={slideIndex} className='text-2xl cursor-pointer' onClick={() => goToSlide(slideIndex)} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
