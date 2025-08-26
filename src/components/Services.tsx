import { Users, Monitor, Dumbbell, Apple, Clock, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your specific goals and fitness level',
      features: ['Customized workouts', 'Form correction', 'Progress tracking', 'Motivation & support']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Online Coaching',
      description: 'Train from anywhere with personalized online programs and support',
      features: ['Video workouts', 'Weekly check-ins', 'Nutrition guidance', '24/7 chat support']
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Workout Plans',
      description: 'Comprehensive training programs designed for all fitness levels',
      features: ['Strength training', 'Cardio programs', 'Flexibility routines', 'Progressive overload']
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: 'Nutrition Plans',
      description: 'Customized meal plans to fuel your body and achieve your goals',
      features: ['Macro calculations', 'Meal prep guides', 'Supplement advice', 'Lifestyle integration']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Training sessions that fit your busy lifestyle and schedule',
      features: ['Morning sessions', 'Evening availability', 'Weekend options', 'Makeup sessions']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goal Setting',
      description: 'Strategic planning to help you achieve your fitness objectives',
      features: ['SMART goals', 'Progress milestones', 'Accountability system', 'Regular assessments']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-emerald-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you prefer in-person training or online coaching, I offer comprehensive fitness solutions to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-emerald-900/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-emerald-600/50"
            >
              <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;