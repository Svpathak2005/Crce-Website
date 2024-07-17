export default function HeroSection() {
  return (
    <section className="text-gray-600 w-full hero body-font relative">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover " autoPlay muted>
          <source src="https://videos.pexels.com/video-files/2002527/2002527-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container px-5 h-full py-24 mx-auto justify-center items-center flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white h-4/6 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 leading-tight text-5xl mb-1 font-medium title-font">Welcome new graduate <br />students</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Admission: Applications Opened</p>
          <p className="leading-relaxed mb-5 font-bold text-gray-900">Deadline: 8th July, 2024</p>
          <div className="relative mb-4"></div>
          <div className="relative mb-4"></div>
          <button className="text-black w-fit bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-md text-lg">Get Started</button>
        </div>
      </div>
    </section>
  )
}
