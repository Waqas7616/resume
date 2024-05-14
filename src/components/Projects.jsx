import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import data from '../Data'



function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const CustomDot = ({ index, active }) => (
        <span
            className={`${index === currentSlide ? 'bg-[#0788ff] w-[25px]' : 'bg-transparent w-[15px]'} border-[1px] border-white  h-[15px] inline-flex mx-2 cursor-pointer rounded-full`}
            onClick={() => sliderRef.current.slickGoTo(index)}
        >

        </span>
    );
    return (
        <div className="w-full bg-[rgba(7,136,255,.1)]">
            <div className='mt-10 w-10/12 m-auto main-container py-20 px-5 '>
                <div className="badge w-fit bg-[rgba(7,136,255,.2)] rounded-[4px] inline-block text-white text-[16px] para py-[5px] px-[12px] uppercase">my projects</div>
                <h1 className="main-title text-white uppercase logo">recent project</h1>

                <div className="slider mt-8 ">
                    <Slider ref={sliderRef} {...settings} appendDots={(dots) => (
                        <div className="custom-dots">
                            {dots.map((dot, index) => (
                                <CustomDot
                                    key={index}
                                    index={index}
                                    active={index === dots.length - 1 ? true : false}

                                />
                            ))}
                        </div>
                    )}>
                        {data.map((item) => (
                            <div className=''>
                                <div className="slider bg-white rounded-[8px] px-4 py-2 mx-2" key={item.id}>
                                    <img src={item.image} alt="" className="w-full rounded-[8px]" />
                                    <div className=" w-full  mt-2 flex items-center justify-between">
                                        <div className="project-info">
                                            <h3 className="main-title text-[20px] text-black">{item.name}</h3>
                                            <p className="para text-[14px] text-[#707476]">{item.catagory}</p>
                                        </div>
                                        <button className="rounded-full border-[2px] hover:bg-black transition-all hover:border-white border-black w-[40px] h-[40px] bg-[#0788ff] text-white flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                                        </button>
                                    </div>
                                </div></div>
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Projects
