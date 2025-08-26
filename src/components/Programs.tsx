import { CheckCircle, Star, Clock, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Beginner Foundation',
      duration: '8 weeks',
      price: '$299',
      popular: false,
      description: 'Perfect for fitness newcomers ready to build healthy habits',
      features: [
        'Basic movement patterns',
        'Bodyweight exercises',
        'Flexibility training',
        'Nutrition basics',
        'Weekly progress check-ins',
        'Exercise form videos'
      ],
      image: 'https://images.pexels.com/photos/5327510/pexels-photo-5327510.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Strength & Muscle',
      duration: '12 weeks',
      price: '$499',
      popular: true,
      description: 'Comprehensive program for building strength and muscle mass',
      features: [
        'Progressive overload system',
        'Compound movements focus',
        'Muscle-building nutrition',
        'Recovery protocols',
        'Supplement guidance',
        'Bi-weekly assessments'
      ],
      image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Fat Loss Transformation',
      duration: '16 weeks',
      price: '$699',
      popular: false,
      description: 'Intensive program designed for maximum fat loss results',
      features: [
        'High-intensity workouts',
        'Metabolic conditioning',
        'Detailed meal plans',
        'Cardio optimization',
        'Body composition tracking',
        'Daily accountability'
      ],
      image: 'https://images.pexels.com/photos/5327469/pexels-photo-5327469.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const dietPlans = [
    {
      name: 'Balanced Nutrition',
      description: 'Sustainable eating plan for long-term health',
      macros: '40% Carbs, 30% Protein, 30% Fat',
      meals: '3 main meals + 2 snacks'
    },
    {
      name: 'High Protein',
      description: 'Optimized for muscle building and recovery',
      macros: '30% Carbs, 40% Protein, 30% Fat',
      meals: '4 main meals + 2 protein shakes'
    },
    {
      name: 'Cutting Phase',
      description: 'Calorie-controlled plan for fat loss',
      macros: '35% Carbs, 35% Protein, 30% Fat',
      meals: '5 small meals throughout the day'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Training Programs */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Training <span className="text-emerald-400">Programs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from my proven training programs designed to deliver results for every fitness level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                program.popular ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {program.popular && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={16} />
                  Most Popular
                </div>
              )}
              
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                  <span className="text-2xl font-bold text-emerald-400">{program.price}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    1-on-1
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle size={16} className="text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Diet Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nutrition <span className="text-emerald-400">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fuel your body with scientifically-backed nutrition plans tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dietPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-emerald-900/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-emerald-600/50"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Macros:</span>
                  <span className="text-emerald-400">{plan.macros}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Meals:</span>
                  <span className="text-emerald-400">{plan.meals}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;