import Image from 'next/image'
export function Hero() {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down">
              Transform Your Business Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl animate-fade-in-up">
              Discover the ultimate solution for streamlining your workflow and boosting productivity with cutting-edge technology.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="h-64 bg-gray-100 rounded-xl">
              <Image
        src="/demo-image-1.jpg"
        alt="Demo Photo"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}