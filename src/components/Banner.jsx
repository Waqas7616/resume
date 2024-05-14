import React from 'react'
import dp from '../images/home-banner.png'

function Banner() {
    return (
        <div className='w-10/12 main-container m-auto flex items-center justify-between gap-8 h-[90vh]  overflow-hidden'>
            <div className="content flex flex-col flex-1">
                <div className="badge w-fit bg-[rgba(7,136,255,.2)] rounded-[4px] inline-block text-white text-[16px] para py-[5px] px-[12px] uppercase">Zia ur Rehman Chaudry</div>
                <h1 className="main-title text-white uppercase logo">hay! i'm zia</h1>
                <h1 className="main-title text-[#0788ff] uppercase logo">i'm a data analyst</h1>
                <p className="para text-white text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur quo incidunt consequatur fugit dignissimos voluptatem, vel iure! Laudantium illum at doloremque beatae ullam hic ipsam voluptas! Repellat, dicta molestiae.
                    Eaque vero cum odit, modi perferendis excepturi quo pariatur obcaecati eveniet, quibusdam velit minus facilis magni fugit. Qui quas sint quia ratione odio mollitia ipsa nulla, veritatis, facere ipsam corrupti.
                    Minima quam recusandae amet nihil voluptates sapiente tempora reprehenderit veniam ratione odit mollitia rerum molestiae eius, asperiores perspiciatis laborum aut nobis, debitis ex ipsum itaque consectetur quos? Error, hic facere.</p>
                <div className="buttons flex items-center gap-8 mt-8">
                    <button className="button title gap-3">
                        get in touch
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                            class="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                    </button>
                    <div className="social-links flex items-center gap-5">
                        <div className="fb rounded-full flex items-center justify-center text-white bg-[#0788ff] border-[2px] border-white w-[40px] h-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.63em" height="1em" viewBox="0 0 320 512"><path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </div>
                        <div className="fb rounded-full flex items-center justify-center text-white bg-[#1275b1] border-[2px] border-white w-[40px] h-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image flex-1 h-[95%]">
                <div className="banner-image overflow-hidden ">
                    <img className='w-full' src={dp} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
