import { Quote, Star } from 'lucide-react';

const Transformations = () => {
  const transformations = [
    {
      name: 'Sarah Johnson',
      age: 28,
      program: 'Fat Loss Transformation',
      duration: '16 weeks',
      results: 'Lost 35 lbs, gained confidence',
      beforeImage: '',
      afterImage: '',
      testimonial: 'Murtaza completely transformed not just my body, but my entire relationship with fitness. His personalized approach and constant support made all the difference.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      age: 34,
      program: 'Strength & Muscle',
      duration: '12 weeks',
      results: 'Gained 15 lbs muscle, 40% strength increase',
      beforeImage: '',
      afterImage: '',
      testimonial: 'The results speak for themselves. Murtaza\'s expertise in strength training is unmatched. I\'ve never felt stronger or more confident.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      age: 26,
      program: 'Online Coaching',
      duration: '20 weeks',
      results: 'Lost 28 lbs, improved overall health',
      beforeImage: '',
      afterImage: '',
      testimonial: 'Training online with Murtaza was incredibly effective. His detailed programs and regular check-ins kept me motivated throughout my journey.',
      rating: 5
    },
    {
      name: 'David Thompson',
      age: 42,
      program: 'Beginner Foundation',
      duration: '8 weeks',
      results: 'Built healthy habits, improved mobility',
      beforeImage: '',
      afterImage: '',
      testimonial: 'As a complete beginner, Murtaza made me feel comfortable and confident. His patient approach helped me build a foundation for lifelong fitness.',
      rating: 5
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-emerald-400">Transformations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real results. See how my clients have transformed their lives through dedicated training and nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((client, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-emerald-600/50"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <img
                    src={client.beforeImage}
                    alt={`${client.name} before`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={client.afterImage}
                    alt={`${client.name} after`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{client.name}</h3>
                    <p className="text-gray-400">Age: {client.age}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-semibold">{client.program}</p>
                    <p className="text-gray-400">{client.duration}</p>
                  </div>
                </div>

                <div className="bg-emerald-900/30 rounded-lg p-4 mb-4">
                  <p className="text-emerald-400 font-semibold text-center">{client.results}</p>
                </div>

                <div className="relative">
                  <Quote className="absolute top-0 left-0 text-emerald-400 w-6 h-6 opacity-50" />
                  <blockquote className="text-gray-300 italic pl-8 mb-4">
                    "{client.testimonial}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center">
                  {[...Array(client.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformations;