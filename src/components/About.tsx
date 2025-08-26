import { Award, Users, Clock, Target, Heart, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Personal Trainer',
      description: 'NASM-CPT, ACSM Certified'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '500+ Clients Transformed',
      description: 'Successful transformations over 8 years'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Competition Coach',
      description: 'Prepared athletes for bodybuilding competitions'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Nutrition Specialist',
      description: 'Precision Nutrition Level 1 Certified'
    }
  ];

  const experience = [
    {
      year: '2016',
      title: 'Started My Fitness Journey',
      description: 'Began my own transformation, lost 40 lbs and discovered my passion for fitness'
    },
    {
      year: '2018',
      title: 'Became a Certified Trainer',
      description: 'Obtained NASM-CPT certification and started training my first clients'
    },
    {
      year: '2020',
      title: 'Launched Online Coaching',
      description: 'Expanded to online training, reaching clients worldwide during the pandemic'
    },
    {
      year: '2022',
      title: 'Nutrition Certification',
      description: 'Added Precision Nutrition certification to provide comprehensive wellness coaching'
    },
    {
      year: '2024',
      title: 'Established Murtaza.Lifts',
      description: 'Built a complete fitness platform serving 500+ clients with proven results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-emerald-400">Murtaza</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My personal transformation journey led me to dedicate my life to helping others achieve their fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <div>
            <div className="mb-8">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Murtaza"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Eight years ago, I was overweight, lacking confidence, and struggling with my health. 
                That moment of realization became the catalyst for my transformation journey.
              </p>
              <p>
                Through dedication, proper nutrition, and consistent training, I lost 40 pounds and 
                gained not just physical strength, but mental resilience. This experience ignited 
                my passion for helping others discover their own potential.
              </p>
              <p>
                Today, I've helped over 500 clients transform their lives through personalized 
                training programs, comprehensive nutrition plans, and unwavering support. My mission 
                is to guide you on your own transformation journey.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full">
                <Target className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Goal-Oriented</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Passionate</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Dedicated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-emerald-900/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-emerald-600/50"
              >
                <div className="text-emerald-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <div key={index} className="relative flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white">
                  {item.year}
                </div>
                <div className="ml-6 flex-grow">
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                {index < experience.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-emerald-600/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;