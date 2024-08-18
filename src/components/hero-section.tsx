export default function HeroSection() {
  return (
    <section className="hero body-font min-h-screen w-full text-gray-600">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto flex h-full items-center justify-center px-5">
        <div className="relative z-10 mt-40 flex h-fit w-full flex-col rounded-lg bg-white bg-opacity-85 p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-3xl font-medium leading-tight text-gray-900 md:text-5xl">
            Welcome New Graduate Students
          </h2>
          <p className="my-1 leading-relaxed text-gray-600">
            Admission: Applications Opened
          </p>
          <p className="mb-4 font-bold leading-relaxed text-gray-900">
            Deadline: 8th July, 2024
          </p>
          <button className="w-fit rounded-md border-0 bg-yellow-500 px-6 py-2 text-lg font-semibold text-gray-950 hover:bg-yellow-600 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
