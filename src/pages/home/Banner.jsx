import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />

      </div>
      <div className='md:w-1/2 w-full  text-center '>
        <h1 className='md:text-5xl text-2xl font-medium mb-7  '>
            Top 10 Books <br /> to make it a <br /> great year</h1>
            <p className='mb-10 text-center'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
            
          <button className="btn-primary  mx-auto">Shop now </button>
        
      </div>
    
    </div>
  )
}

export default Banner
