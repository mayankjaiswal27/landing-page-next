export function Features() {
  const features = [
    {
      title: "Lightning Speed",
      description: "Experience unparalleled performance with our optimized technology",
      icon: "⚡",
    },
    {
      title: "Seamless Integration",
      description: "Connect effortlessly with your existing tools and systems",
      icon: "🔗",
    },
    {
      title: "Premium Support",
      description: "Get expert help whenever you need it, 24/7",
      icon: "⭐",
    },
  ]

  return (
    <section id="features" className="py-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}