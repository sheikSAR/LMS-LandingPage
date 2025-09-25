import React, { useState } from 'react';
import { ChevronDown, Check, Phone } from 'lucide-react';

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full px-4 md:px-[42px] py-4 bg-white">
        <div className="max-w-[1303px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/af5815d5c8e98fab36d2793c7dc62abb9e93d0ce?width=322"
              alt="BroskiesHub Logo"
              className="h-6 md:h-8"
            />
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4 bg-brand-blue rounded-full px-3 md:px-6 py-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span className="text-white font-bold text-sm md:text-lg">+918148040507</span>
            </div>
            <button className="px-4 md:px-8 py-2 md:py-4 border border-black bg-white font-bold text-black hover:bg-gray-50 transition-colors text-sm md:text-base">
              For Companies
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-[90px] py-8 md:py-16">
        <div className="max-w-[1303px] mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          <div className="w-full lg:w-[586px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#333] font-lato text-lg md:text-xl leading-[150%]">
                Join over 2700+ students from 100+ colleges who are building their experience with us.
              </p>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="font-inter text-3xl md:text-4xl lg:text-[56px] font-bold leading-[120%] text-black">
                    Build the Experience, Get the Job
                  </h1>
                  <p className="text-[#333] font-lato text-lg md:text-xl leading-[150%] text-justify">
                    No more being told you need 'experience' to get your first job. BroskiesHub is where you build that experience. We provide a structured, 3-phase program that guides you through building a complete, real-world simulated project. You go beyond theory, write production-level code, and develop the professional portfolio that bypasses the 'fresher' tag. Your completed project is your entry ticket to referrals with our partner companies.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-brand-blue text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
                    Build Your Portfolio (It's Free)
                  </button>
                </div>
              </div>
              <p className="text-[#333] font-lato text-sm md:text-base font-bold uppercase">
                100% Free. No certificate fee.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[637px] h-64 md:h-96 lg:h-[530px] border-2 border-black bg-white flex items-center justify-center">
            <div className="text-center px-8 md:px-[157px] py-8 md:py-[166px]">
              <p className="font-open-sans text-lg md:text-2xl text-black">
                <span className="font-bold">Image or video </span>
                that helps reinforce core value proposition and articulate what it is you do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section 1 */}
      <section className="w-full bg-brand-gray border border-black px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            <h2 className="max-w-[748px] text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
              Don't Just Take Our Word For It. See What Our Interns Have Built.
            </h2>
            <p className="text-center font-lato text-lg md:text-xl leading-[120%] text-black px-4">
              Our interns come from India's top colleges and leave with a portfolio of real-world projects. They don't just learn; they build, innovate, and get ready for their first job. Here are a few of their stories.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex-1 border-2 border-black bg-white flex items-center justify-center py-16 md:py-[140px] px-8 md:px-[157px]">
                  <p className="text-center font-open-sans text-xl md:text-2xl font-bold text-black leading-[130%]">
                    Social Proof
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-brand-blue text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
            Build Your Portfolio
          </button>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="w-full bg-white border border-black px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[836px] mx-auto flex flex-col items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
              Don't Buy a Certificate to Get a Job. Build the Experience That Proves You're Job-Ready
            </h2>
            <p className="max-w-[740px] text-center font-lato text-base md:text-lg leading-[150%] text-[#333] px-4">
              You're caught in the Fresher's Paradox because degrees and tutorials aren't proof of skill. A real project is. As an Experience Accelerator, we provide the platform to build that project—the verifiable proof that beats the "experience required" trap and gets you hired.
            </p>
          </div>
          <button className="bg-brand-blue-alt text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
            Start Building Your Experience
          </button>
        </div>
      </section>

      {/* Features Section 1 */}
      <section className="bg-white px-4 md:px-[120px] py-12 md:py-20 pb-8 md:pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-[92px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/afe5d416c24f71b816c1706aa01ae3713e6b04fe?width=1148"
            alt="Build Portfolio"
            className="w-full lg:w-[574px] h-64 md:h-96 lg:h-[534px] border border-black object-cover"
          />
          <div className="w-full lg:w-[534px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-2xl md:text-3xl lg:text-[40px] font-bold leading-[120%] text-black">
                Build a Job-Winning Portfolio
              </h3>
              <p className="font-open-sans text-sm md:text-base leading-[150%] text-subtext text-justify">
                Our solution ensures you build a multi-dimensional portfolio that gets you hired. We do this through our proprietary 3-phase program that guides you from mastering foundational skills with hands-on tasks, to building a complete application from a real-world project brief, and finally, to creating a unique innovation project that showcases your personal creativity to employers.
              </p>
            </div>
            <button className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Build the Proof of Your Skills
            </button>
          </div>
        </div>
      </section>

      {/* Features Section 2 */}
      <section className="bg-white px-4 md:px-[120px] py-8 md:py-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-[92px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/afe5d416c24f71b816c1706aa01ae3713e6b04fe?width=1148"
            alt="Get Referrals"
            className="w-full lg:w-[574px] h-64 md:h-96 lg:h-[534px] border border-black object-cover"
          />
          <div className="w-full lg:w-[534px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-2xl md:text-3xl lg:text-[40px] font-bold leading-[120%] text-black">
                Get Direct Referrals to Hiring Companies
              </h3>
              <p className="font-open-sans text-sm md:text-base leading-[150%] text-subtext text-justify">
                Our solution creates a direct path from experience to opportunity. We accomplish this by tracking your performance on real projects, creating a comprehensive skill profile that goes far beyond a resume, and sharing this verified profile directly with our network of partner companies who are actively hiring for roles that match your new experience.
              </p>
            </div>
            <button className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Unlock Job Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Features Section 3 */}
      <section className="bg-white px-4 md:px-[120px] py-8 md:py-10 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-[92px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/afe5d416c24f71b816c1706aa01ae3713e6b04fe?width=1148"
            alt="Expert Feedback"
            className="w-full lg:w-[574px] h-64 md:h-96 lg:h-[534px] border border-black object-cover"
          />
          <div className="w-full lg:w-[534px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-2xl md:text-3xl lg:text-[40px] font-bold leading-[120%] text-black">
                Receive Feedback from Industry Experts
              </h3>
              <p className="font-open-sans text-sm md:text-base leading-[150%] text-subtext text-justify">
                Our solution provides a multi-layered support system to ensure you grow to a professional standard. Our unique approach involves providing instant, AI-powered feedback on daily tasks to accelerate your learning, conducting structured review sessions with industry mentors to guide your project development, and facilitating a community forum for continuous peer-to-peer support.
              </p>
            </div>
            <button className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Get Professional Feedback Now
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section 2 */}
      <section className="w-full bg-brand-gray border border-black px-[90px] py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-12 w-full">
            <h2 className="w-[748px] text-center font-inter text-[44px] font-bold leading-[120%] text-black">
              Social Proof Section (Stats, Testimonials, Case Studies, etc.)
            </h2>
            <div className="flex gap-12 w-full">
              <div className="flex-1 border-2 border-black bg-white flex items-center justify-center py-[140px] px-[157px]">
                <p className="text-center font-open-sans text-2xl font-bold text-black leading-[130%]">
                  Social Proof
                </p>
              </div>
            </div>
          </div>
          <button className="bg-brand-blue-alt text-white font-bold font-lato text-xl px-14 py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
            Build Your Portfolio
          </button>
        </div>
      </section>

      {/* Method Section */}
      <section className="w-full bg-white border border-black px-[90px] py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-12 w-full">
            <h2 className="w-[748px] text-center font-inter text-[44px] font-bold leading-[120%] text-black">
              Go Beyond Courses. Our Project-First Method is How You Get Hired.
            </h2>
            <div className="flex gap-12 w-full">
              {[
                {
                  title: "Real-World Guided Projects",
                  description: "You won't just complete small, isolated tasks. We provide a professional project brief, and you build a complete, functional application from start to finish—just like you would on a real development team."
                },
                {
                  title: "A GitHub Portfolio, Not just a PDF Certificate",
                  description: "We help you build the one credential that recruiters actually look at: a professional GitHub repository filled with clean code and a live project. This is the undeniable proof of your skills."
                },
                {
                  title: "Mentorship & Expert Feedback",
                  description: "Receive instant, AI-powered feedback on your daily tasks to learn faster, and get structured reviews from industry mentors on your major projects to ensure your work meets a professional standard."
                }
              ].map((feature, index) => (
                <div key={index} className="flex-1 border-2 border-black bg-white flex items-center justify-center py-[70px] px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-2xl font-bold text-black leading-[130%]">
                      {feature.title}
                    </h3>
                    <p className="font-open-sans text-2xl text-black leading-[130%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-12 w-full">
              {[
                {
                  title: "Direct Referrals to Startups",
                  description: "We don't just leave you with a portfolio. We actively share the profiles of our top-performing interns with our network of hiring startups, creating a direct path from experience to opportunity."
                },
                {
                  title: "100% Free & Accessible",
                  description: "Our program is, and always will be, completely free for students. We believe in your potential, and our model is built on having companies pay to hire our proven talent, not on students paying for a chance."
                },
                {
                  title: "Structured 3-Phase Program",
                  description: "Our unique 3-phase program takes you from mastering foundational skills to building a guided project and creating an innovation project that proves your talent."
                }
              ].map((feature, index) => (
                <div key={index} className="flex-1 border-2 border-black bg-white flex items-center justify-center py-[70px] px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-2xl font-bold text-black leading-[130%]">
                      {feature.title}
                    </h3>
                    <p className="font-open-sans text-2xl text-black leading-[130%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-brand-blue text-white font-bold font-lato text-xl px-14 py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
            Build Your Portfolio
          </button>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="w-full bg-brand-gray border border-black px-[90px] py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-12 w-full">
            <h2 className="w-[748px] text-center font-inter text-[44px] font-bold leading-[120%] text-black">
              Your Journey from Fresher to Hired in 3 Simple Steps
            </h2>
            <div className="flex gap-12 w-full">
              {[
                {
                  title: "Build Your Foundation",
                  description: "Build your core skills through a series of hands-on tasks with instant AI feedback that accelerates your learning."
                },
                {
                  title: "Create Your Portfolio",
                  description: "Apply your skills to build a complete, real-world application that becomes the centerpiece of your new portfolio."
                },
                {
                  title: "Connect to Opportunity",
                  description: "Your portfolio is your proof. We refer our top performers directly to our hiring network for your first interview."
                }
              ].map((step, index) => (
                <div key={index} className="flex-1 border-2 border-black bg-white flex items-center justify-center py-[140px] px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-2xl font-bold text-black leading-[130%]">
                      {step.title}
                    </h3>
                    <p className="font-open-sans text-2xl text-black leading-[130%]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-brand-blue text-white font-bold font-lato text-xl px-14 py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
            Start Building Now (It's Free)
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white px-[331px] py-20">
        <div className="flex flex-col items-center gap-12">
          <h2 className="font-inter text-[40px] font-bold leading-[125%] text-dark-blue text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-8 w-[777px]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col gap-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFaq(item)}
                >
                  <h3 className="font-inter text-2xl font-bold leading-[164%] text-dark-blue">
                    Question #{item}
                  </h3>
                  <ChevronDown 
                    className={`w-3 h-2 text-[#333] transition-transform ${
                      openFaq === item ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div className="w-full h-px bg-black"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-brand-gray px-[90px] py-20">
        <div className="max-w-[1303px] mx-auto flex items-start gap-20">
          <div className="w-[586px] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#333] font-lato text-xl leading-[150%]">
                Over 90% of tech recruiters reject 'freshers' for one reason: no real-world projects.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="font-inter text-[42px] font-bold leading-[120%] text-black">
                    Your Career Won't Wait. Why Should You?
                  </h2>
                  <p className="text-[#333] font-lato text-xl leading-[150%] text-justify">
                    This is the moment you stop being a "fresher" and start becoming a professional. Every day you wait is another day a competitor is building the portfolio that will land them the job you want. BroskiesHub is your direct path from a theoretical degree to a tangible, job-winning portfolio that proves you are ready. The choice is simple: wait for an opportunity, or build one right now.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-xl text-[#333]">
                        Build a Professional, Job-Winning Portfolio
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-xl text-[#333]">
                        Get Expert Feedback & Industry Mentorship
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-xl text-[#333]">
                        Unlock Direct Referrals to Hiring Startups
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-brand-blue-alt text-white font-bold font-lato text-xl px-14 py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
                    Start Building Now (It's Free)
                  </button>
                </div>
              </div>
              <p className="text-[#333] font-lato text-base font-bold uppercase">
                100% Free. No certificate fee.
              </p>
            </div>
          </div>
          <div className="w-[637px] h-[530px] border-2 border-black bg-white flex items-center justify-center">
            <div className="text-center px-[157px] py-[166px]">
              <p className="font-open-sans text-2xl text-black">
                <span className="font-bold">Image or video </span>
                that helps reinforce core value proposition and articulate what it is you do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border border-black px-[90px] py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12">
          <h2 className="w-[748px] text-center font-inter text-[44px] font-bold leading-[120%] text-black">
            Footer
          </h2>
        </div>
      </footer>
    </div>
  );
}
