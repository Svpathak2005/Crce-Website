export default function HeroSection() {
  return (
    <section className="hero body-font relative mt-[-160px] w-full text-gray-600">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto flex h-full items-center justify-center px-5 py-24">
        <div className="relative z-10 mt-0 flex h-4/6 w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-5xl font-medium leading-tight text-gray-900">
            Welcome new graduate <br />
            students
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Admission: Applications Opened
          </p>
          <p className="mb-5 font-bold leading-relaxed text-gray-900">
            Deadline: 8th July, 2024
          </p>
          <div className="relative mb-4"></div>
          <div className="relative mb-4"></div>
          <button className="w-fit rounded-md border-0 bg-yellow-500 px-6 py-2 text-lg text-black hover:bg-yellow-600 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
