import React from 'react'

const page = () => {
  return (
    <div>
        <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
            <img
            src="/projects/cloudsnap/cloudsnap.png"
            className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
            <img
            src="/projects/cloudsnap/cloudsnap2.png"
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
            <img
            src="/projects/cloudsnap/cloudsnap3.png"
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
            <img
            src="/projects/cloudsnap/cloudsnap4.png"
            className="w-full" />
        </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>
  )
}

export default page;
