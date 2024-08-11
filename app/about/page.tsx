import React from 'react'

const page = () => {
  return (
    <div>
      <div className="diff w-full min-h-screen-minus-nav ">
        <div className="diff-item-1">
          <img alt="daisy" src="/life/lifeIntroPic2.png" />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="/life/lifeIntro.png" />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div>
        <img alt="daisy" src="/life/coffee.png" className='w-2/5' />
        
      </div>

    </div>
  )
}

export default page
