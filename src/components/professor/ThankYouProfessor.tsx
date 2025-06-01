import React, { useState } from 'react';
import { Heart, Star, BookOpen, Code, GitBranch, Award, Sparkles, Github, Users, Coffee, Lightbulb, Trophy, Clock, Target } from 'lucide-react';
import { useParallax } from '../../hooks/useScrollPosition';

const ThankYouProfessor: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Professor's GitHub lessons transformed how I understand version control. Every commit now has purpose!",
      author: "Student A",
      role: "Full Stack Developer"
    },
    {
      text: "The way you explained branching strategies made complex workflows seem simple. Thank you!",
      author: "Student B", 
      role: "Software Engineer"
    },
    {
      text: "Your passion for clean code and meaningful commits inspired my entire development approach.",
      author: "Student C",
      role: "DevOps Engineer"
    }
  ];

  const achievements = [
    { icon: GitBranch, title: "Git Master", description: "Expert in version control and collaboration" },
    { icon: Users, title: "Team Builder", description: "Creating collaborative development environments" },
    { icon: Lightbulb, title: "Innovation Guide", description: "Teaching modern development practices" },
    { icon: Trophy, title: "Excellence Award", description: "Outstanding teaching achievements" }
  ];
  return (
    <section id="professor" className="py-20 bg-gradient-to-br from-cyan-900 via-emerald-800 to-teal-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-100 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-emerald-400 rounded-full animate-float animation-delay-600"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-cyan-300 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-emerald-300 rounded-full animate-float animation-delay-900"></div>
        <div className="absolute top-2/3 left-1/6 w-12 h-12 bg-yellow-400 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute top-1/6 right-1/6 w-28 h-28 bg-purple-400 rounded-full animate-float animation-delay-800"></div>
      </div>

      {/* Enhanced Floating Code Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/5 text-cyan-300 animate-float">
          <GitBranch className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-emerald-300 animate-float animation-delay-400">
          <Code className="w-10 h-10" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 text-cyan-400 animate-float animation-delay-200">
          <BookOpen className="w-12 h-12" />
        </div>
        <div className="absolute top-2/3 left-1/3 text-emerald-300 animate-float animation-delay-800">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 text-yellow-400 animate-float animation-delay-600">
          <Coffee className="w-8 h-8" />
        </div>
        <div className="absolute top-1/6 right-1/3 text-purple-400 animate-float animation-delay-300">
          <Github className="w-10 h-10" />
        </div>
      </div>
        <div 
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-cyan-400 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-bold animate-fadeIn">
                Thank You 
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text"> Sensei</span>
              </h2>
              <Sparkles className="w-10 h-10 text-emerald-400 animate-pulse" />
            </div>
            <p className="text-2xl text-cyan-200 animate-fadeIn animation-delay-300 mb-4">
              Our GitHub Sensei - Teaching the Way of Version Control & Development 🌸
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fadeIn animation-delay-600">
              A master teacher who combines technical excellence with passion for anime culture, 
              creating an inspiring learning environment for all students.
            </p>
          </div>
          
          {/* Enhanced Photo and Info Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
            {/* Main Professor Photo */}
            <div className="lg:col-span-1">
              <div className="relative animate-fadeIn animation-delay-600">
                <div className="relative group">
                  {/* Decorative frame */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-emerald-500 to-cyan-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                  
                  {/* Professor Image */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 transform group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="/9387719.jpg" 
                      alt="Our Amazing GitHub Sensei"
                      className="w-full rounded-2xl shadow-2xl"
                    />
                    
                    {/* Floating appreciation icons */}
                    <div className="absolute -top-6 -right-6 animate-bounce">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 animate-pulse">
                      <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-full shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/4 -left-4 animate-float">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stars */}
                  <div className="absolute top-12 left-12 text-yellow-400 animate-pulse">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <div className="absolute bottom-12 right-12 text-yellow-300 animate-pulse animation-delay-300">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div className="absolute top-1/2 -right-4 text-cyan-400 animate-float animation-delay-600">
                    <Github className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Details Cards */}
            <div className="lg:col-span-2 space-y-6 animate-fadeIn animation-delay-900">
              {/* Teaching Excellence Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mr-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300">Teaching Excellence</h3>
                    <p className="text-cyan-200">Master Educator & Git Specialist</p>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Your innovative teaching methods make complex Git concepts accessible to everyone. 
                  Through hands-on projects and real-world scenarios, you've transformed how we approach version control.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-300">Always Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Goal-Oriented</span>
                  </div>
                </div>
              </div>
              
              {/* Anime & Tech Fusion Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full mr-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-300">Anime & Tech Fusion</h3>
                    <p className="text-emerald-200">Connecting Culture with Code</p>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Just like how anime teaches us about perseverance, friendship, and growth, your lessons have taught us 
                  the importance of clean code, meaningful commits, and collaborative spirit in development. You make learning an adventure!
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white">Creative</div>
                    <div className="text-xs text-gray-300">Approach</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white">Inspiring</div>
                    <div className="text-xs text-gray-300">Methods</div>
                  </div>
                </div>
              </div>
              
              {/* Impact & Gratitude Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full mr-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-pink-300">Lasting Impact</h3>
                    <p className="text-pink-200">Thank You from All Students</p>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  This anime-themed website is our way of combining your love for teaching with the creativity and 
                  storytelling that anime represents. Your passion has inspired countless students to excel in development.
                </p>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-300 text-sm">Powered by dedication and countless coffee breaks</span>
                </div>
              </div>
            </div>
          </div>
            {/* Enhanced Achievement Stats with Icons */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Professor's <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">Achievements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">              {achievements.map((achievement, index) => {
                const getDelayClass = (index: number) => {
                  switch (index) {
                    case 0: return '';
                    case 1: return 'animation-delay-200';
                    case 2: return 'animation-delay-400';
                    case 3: return 'animation-delay-600';
                    default: return 'animation-delay-800';
                  }
                };

                return (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-scaleIn text-center group hover:scale-105 ${getDelayClass(index)}`}
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Student Testimonials Carousel */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Student <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">Testimonials</span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl text-cyan-400 mb-4">"</div>
                  <p className="text-xl text-gray-200 leading-relaxed mb-6">
                    {testimonials[activeTestimonial].text}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonials[activeTestimonial].author}</div>
                      <div className="text-cyan-300 text-sm">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Navigation */}              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    title={`View testimonial ${index + 1}`}
                    aria-label={`View testimonial ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'bg-cyan-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Professor's Impact Gallery */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Teaching <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">Gallery</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/9387719.jpg" 
                  alt="Professor teaching Git basics"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold mb-1">Git Fundamentals</h4>
                  <p className="text-gray-300 text-sm">Teaching the basics with passion</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-cyan-500/80 p-2 rounded-full">
                    <GitBranch className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Gallery Item 2 */}
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/professor.jpg" 
                  alt="Collaborative coding session"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold mb-1">Team Collaboration</h4>
                  <p className="text-gray-300 text-sm">Building stronger developer teams</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-500/80 p-2 rounded-full">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Gallery Item 3 */}
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/9387719.jpg" 
                  alt="Advanced Git workflows"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold mb-1">Advanced Workflows</h4>
                  <p className="text-gray-300 text-sm">Mastering complex Git strategies</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-500/80 p-2 rounded-full">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updated Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-scaleIn">
              <GitBranch className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-cyan-300 text-sm">Commits Taught</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-scaleIn animation-delay-200">
              <Code className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-emerald-300 text-sm">Dedication</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-scaleIn animation-delay-400">
              <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-cyan-300 text-sm">Knowledge Shared</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-scaleIn animation-delay-600">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-pink-300 text-sm">Gratitude</div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-900">
              <Heart className="w-5 h-5" />
              <span>Thank You for Everything</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Professor Section - Anime Inspired */}
      <section 
        id="thank-you-professor"
        className="relative py-20 bg-gradient-to-br from-emerald-900 via-cyan-800 to-cyan-900 text-white overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-emerald-400 rounded-full animate-float animation-delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-cyan-300 rounded-full animate-float animation-delay-600"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Thank You, <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">GitHub Professor</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeIn animation-delay-300">
            Your dedication, passion, and guidance have inspired us to explore new horizons. This website is a small token of appreciation for your love of anime and your incredible efforts in teaching us.
          </p>

          <div className="flex justify-center items-center gap-4 animate-fadeIn animation-delay-600">
            <Heart className="text-cyan-400 w-8 h-8 animate-pulse" />
            <img 
              src="/professor.jpg" 
              alt="Professor" 
              className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-lg"
            />
            <Heart className="text-cyan-400 w-8 h-8 animate-pulse" />
          </div>

          <div className="mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Explore More Anime
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ThankYouProfessor;