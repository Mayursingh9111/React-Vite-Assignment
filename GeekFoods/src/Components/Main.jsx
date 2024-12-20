function Main() {
  return (
    <>
      <div>
        <section className="bg-[url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg)]  bg-cover  bg-no-repeat bg-center">
          <div className=" mx-auto max-w-screen-xl relative sm:px-6 lg:flex px-4 py-32 lg:h-screen lg:items-center lg:px-8">
            <div className=" drop-shadow-2xl text-center ltr:sm-text-left rtl:sm:text-right max-w-xl">
              <h1 className="font-extrabold text-white sm:text-6xl  ">
                Let us find your
                <br />
                <span className="text-[#BE123C] block">Forever Food.</span>
              </h1>
              <p className=" mt-5 text-white font-bold text-[18px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className=" mt-4 gap-3 flex flex-wrap text-center">
              <a href="#"className=" drop-shadow-2xl relative rounded-[12px] py-3 px-14 overflow-hidden group bg-[#DA123C] relative hover:bg-gradient-to-r hover:from-red-[#BE123C] hover:to-red-[#BE123C] text-white hover:ring-offset-2 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-9 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[white] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-semibold text-white">Know More</span>
                </a>
                <a href="#"className=" drop-shadow-2xl relative rounded-[12px] py-3 px-14 overflow-hidden group bg-[white] relative hover:bg-gradient-to-r hover:from-red-[#BE123C] hover:to-red-[#BE123C] text-white hover:ring-offset-2 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-9 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#BE123C] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-semibold text-black">Know More</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
