"use client"
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import { useEffect, useRef } from 'react';


export default function Home() {
  
  useEffect(() => {
    const tl = gsap.timeline()
    const t2 = gsap.timeline({ repeat: -1 })
    t2.fromTo(
      '.pg5-heading', // Replace with your actual class or selector
      { x: '0%' },
      { x: '-100%', duration: 2, ease: 'power2.out' }
    );

    tl.to(".page1", {
      y: "100vh",
      scale: 0.6,
      duration: 0
    })
    tl.to(".page1", {
      y: "30vh",
      duration: 1,
      delay: 1
    });
    tl.to(".page1", {
      y: "0vh",
      rotate: 360,
      scale: 1,
      duration: 0.7
    })
    
   
    return () => {
      tl.kill();
      
     
    };
  });

  return (
    <div className="main bg-[#222] overflow-x-hidden scroll-smooth " >

      <div className="page1 min-h-screen w-screen bg-[#C4BCB3] relative overflow-x-hidden ">
        {/* navbar */}
        <div className="nav h-28 w-full flex items-center justify-between py-0 px-[30px] border-b border-black border-solid ">
          <h5 className='text-xl font-light w-2/5'>Amsterdam,NL</h5>
          <img src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg" alt="" className='h-8 w-2/5' />
          <i className="ri-menu-3-line w-2/5 text-right "></i>
        </div>
        {/* elements */}
        <div className='elems  h-[430px] flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-14'>

          <div className="elem1 w-full md:w-[30%] h-full mb-6 md:mb-0">
            <div className="image-div h-3/5 w-full overflow-hidden hover:scale-[1.1] ">
              <img src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?" alt="" className='h-full w-full object-cover transition-all duration-[ease] delay-[0.5s] ' />
            </div>
            <h4 className='text-2xl font-medium my-2.5 font-canopee'>AVRO | KO <span className='bg-orange-800 text-white font-thin text-xl p-1 rounded'>NEW</span></h4>
            <p className='text-xl font-domain font-light text-[#656565] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi placeat doloribus dicta aliquam asperiores laboriosam reprehenderit vero cupiditate doloremque.</p>
          </div>

          <div className="elem2 w-full md:w-[30%] h-full  border-r border-l  border-solid px-4 md:px-7 py-5 text-center border-x-gray-500 ">
            <h2 className='font-canopee text-7xl'>All Work!</h2>
            <h3 className='font-domain font-thin text-5xl text-[#4b4b4b] my-5'>A Featured selection<br />the latest work-<br />of the last years</h3>
            <h6 className='font-domain text-xl text-[#2f2f2f] font-thin '>Tip! Drag sideways to navigate</h6>
          </div>

          <div className="elem3 w-full md:w-[30%] h-full font-light">
            <div className="image-div h-3/5 w-full overflow-hidden hover:scale-[1.1]">
              <img src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?" alt="" className='h-full w-full object-cover  transition-all duration-[ease] delay-[0.5s]' />
            </div>
            <h4 className='text-2xl font-medium my-2.5 font-canopee'>The roger hub <span className='bg-orange-800 text-white font-thin text-xl p-1 rounded'>NEW</span></h4>
            <p className='text-xl font-domain font-light text-[#656565] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi placeat doloribus dicta aliquam asperiores laboriosam reprehenderit vero cupiditate doloremque.</p>
          </div>

        </div>
        <h1 className='text-[570px] font-canopee font-thin bg-[#1C1C19] text-[#C4BCB3] leading-[600px] width-[96%] mx-[2%] tracking-tight'>
          MIRANDA
        </h1>
      </div>

      <div className='page2 h-[180vh] w-full bg-[#C4BCB3] flex items-center justify-between py-20 px-12' >
        <div className="page2-left  h-full w-[35%] pr-12 border-r border-solid border-[#222] ">
          <h2 className='text-[150px] font-canopee text-center leading-[150px] font-thin' >Interative <span className='text-[210px] font-[900] '>artist!</span></h2>
          <img className='h-1/2 w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg" alt="" />
          <p className='text-2xl font-sans text-[#2f2f2f] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi, officia delectus consequatur sed nihil cupiditate, in impedit, fugit consequuntur eveniet! Odit, quaerat exercitationem sit ipsa odio minus numquam modi!</p>
        </div>
        <div className="page2-right h-full w-[70%] px-12  ">
          <img className='h-[53%] w-full object-cover ' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg" alt="" />
          <h1 className='font-canopee text-8xl tracking-[-1px] font-thin '><span>Digital Art Director</span> <span>Interactive Designer</span> <span>Creative Developer </span>Based in AmsterDam,NL.</h1>
        </div>
      </div>
      <div className="page3 relative h-[75vh] bg-[#C4BCB3] ">
        <h1  className='text-[450px] font-canopee bg-[#1C1C19] text-[#C4BCB3] w-fit ml-[2%] px-5 font-thin tracking-[-10px] leading-[500px]'>Website</h1>
        <img  className='h-[400px] absolute top-0 right-[3%] ' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png" alt="" />
      </div>
      <div className="page4 h-screen w-full flex items-center bg-[#C4BCB3] justify-between ">
        <div className="page4-left  w-[65%] h-full py-[80px] px-[60px] ">
          <img className='h-full w-full object-cover' src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg" alt="" />
        </div>
        <div className="page4-right w-[35%] h-full  py-[80px] px-[60px]  ">
          <p className='text-3xl font-domain font-thin text-[#2f2f2f] mb-[50px] leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad praesentium molestiae, quam perspiciatis odit ut quis mollitia deleniti at! Temporibus magnam nulla esse optio atque minus facilis repudiandae est!</p>
          <div className="group oval flex items-center justify-center flex-nowrap h-[260px] w-full rounded-[50%] bg-[#CAC1B6] border-[1px] border-solid border-[#2f2f2fc6] overflow-hidden">
            <img
              className='h-[60px] transform translate-x-[-100%] transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[76%]'
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
              alt=""
            />
            <h1 className='transform translate-x-[-50%] text-6xl font-canopee font-thin w-full h-full flex items-center justify-center transition-all duration-[ease] delay-[0.6s] group-hover:translate-x-[120%]'>
              All Work
            </h1>
          </div>

        </div>
      </div>
      <div className="page5 h-[110px] w-full bg-[#C4BCB3] py-[30px] whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide border-y-[1px] border-solid border-[#2f2f2f]">
        <h1 className='pg5-heading text-7xl font-domain font-thin inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px]  '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>
        <h1 className=' pg5-heading text-7xl font-domain font-thin  inline-block mr-[20px] mb-[2px] '>Let's create something together <span className='font-canopee bg-[#2f2f2f] text-[#C4BCB3] px-[12px] '>Email ME</span></h1>

      </div>
      <div className="page6 h-[50px] w-full bg-[#C4BCB3] py-[30px] "></div>
    </div>
  );
}
