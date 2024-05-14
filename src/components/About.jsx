import React from 'react'
import about from '../images/about-banner.png'
import effect1 from '../images/effect-1.svg'
import effect2 from '../images/effect-2.svg'

function About() {
    return (
        <div className='w-10/12 main-container m-auto flex justify-between  items-center gap-8 mt-20 relative py-20' >
            <img src={effect1} alt="" className="absolute -left-5 bottom-8 z-1 effect" />
            <img src={effect2} alt="" className="absolute right-5 top-0 z-1 effect" />
            <div className="image-sec flex-[0.7] relative z-3">
                <div className="image">
                    <img className='w-[90%] ml-auto' src={about} alt="" />
                </div>
            </div>
            <div className="content-sec flex-1 flex-col justify-between flex items-start gap-5">
                <div className="badge w-fit bg-[rgba(7,136,255,.2)] rounded-[4px] inline-block text-white text-[16px] para py-[5px] px-[12px] uppercase">About us</div>
                <h1 className="main-title text-white uppercase logo">i am available for</h1>
                <h1 className="main-title text-[#0788ff] uppercase logo">data analytic</h1>
                <h1 className="main-title text-white uppercase logo">projects</h1>
                <p className="para text-white text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur quo incidunt consequatur fugit dignissimos voluptatem, vel iure! Laudantium illum at doloremque beatae ullam hic ipsam voluptas! Repellat, dicta molestiae.</p>

                <div className="flex items-center gap-5 mt-3">
                    <div class="r-box bg-[hsla(0,0%,100%,.05)] border-[1px] border-[hsla(0,0%,100%,.05)] rounded-[8px] flex flex-col p-[20px] items-center"><h3 className='title text-white text-[25px]'>280<span>+</span></h3><label className='para text-white text-[16px]'>Google Review</label></div>
                    <div class="r-box bg-[hsla(0,0%,100%,.05)] border-[1px] border-[hsla(0,0%,100%,.05)] rounded-[8px] flex flex-col p-[20px] items-center"><h3 className='title text-white text-[25px]'>280<span>+</span></h3><label className='para text-white text-[16px]'>Google Review</label></div>
                    <div class="r-box bg-[hsla(0,0%,100%,.05)] border-[1px] border-[hsla(0,0%,100%,.05)] rounded-[8px] flex flex-col p-[20px] items-center"><h3 className='title text-white text-[25px]'>280<span>+</span></h3><label className='para text-white text-[16px]'>Google Review</label></div>
                </div>
                <button className="button mt-4">get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                        class="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                </button>

            </div>
        </div>
    )
}

export default About
