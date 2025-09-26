import React, { useRef, useState } from 'react';
import { ChevronDown, Check, Phone, Star, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTA_URL = 'https://lms.broskieshub.com';

function CtaLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CTA_URL} className={className}>
      {children}
    </a>
  );
}

const testimonials = [
  {
    id: '1',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756210706/mohd_anas_curu7f.mp4',
    studentName: 'MOHD ANAS',
    rating: 5,
    college: 'Indian Institute of Technology, Madras',
    course: 'Internship Program',
    testimonialText: 'It was a very nice experience and I gained a lot of experience and skills.'
  },
  {
    id: '2',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.10.01_e4ea9161_ma5xr2.mp4',
    studentName: 'Dashami Jituri',
    rating: 4,
    college: 'Usha Mittal Institute of Technology, SNDT University, Mumbai',
    course: 'Development Internship',
    testimonialText: 'My experience at BroskiesHub was both enriching and transformative. I not only strengthened my technical foundation through real-world project development but also learned the importance of creativity, innovation, and attention to detail. The supportive environment encouraged me to go beyond requirements and build a project that truly stands out.'
  },
  {
    id: '3',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150952/WhatsApp_Video_2025-08-26_at_01.10.01_45d1e2b0_pwt6qp.mp4',
    studentName: 'Firdaush Alam',
    rating: 5,
    college: 'Secab Institute of Engineering and Technology',
    course: 'Python Development Internship',
    testimonialText: 'During my internship at BroskiesHub, I gained valuable hands-on experience working as a Python Developer. I collaborated on multiple projects involving React, Flask, RESTful APIs, and database management, which enhanced my full-stack development skills. The supportive environment helped me grow technically and professionally, preparing me well for real-world software development challenges.'
  },
  {
    id: '4',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.10.00_aecd1003_ujhxts.mp4',
    studentName: 'Jivika K Ambade',
    rating: 4,
    college: 'SNDTWU',
    course: 'Internship Program',
    testimonialText: 'It was amazing. The team was really supportive throughout the internship. I never thought I would be chosen as a top performer but my efforts paid off and I was chosen as one of the top performers'
  },
  {
    id: '5',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150952/WhatsApp_Video_2025-08-26_at_01.09.57_b8494776_xho0mo.mp4',
    studentName: 'Atharva Mandlik',
    rating: 5,
    college: 'MIT-WPU PUNE',
    course: 'Python Development Internship',
    testimonialText: 'My internship at BroskiesHub was a valuable learning experience where I gained hands-on exposure to real-world Python development. I had the opportunity to build a complete Restaurant Billing ERP System, which enhanced my skills in GUI design, database management, and project structuring. The supportive environment at BroskiesHub helped me strengthen both my technical expertise and problem-solving abilities.'
  },
  {
    id: '6',
    videoUrl: 'https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.09.57_4c45e0bb_dmncwj.mp4',
    studentName: 'GUNGUN PAL',
    rating: 5,
    college: 'ABDUL KALAM TECHNICAL UNIVERSITY',
    course: 'Development Internship',
    testimonialText: 'My experience was amazing at BroskiesHub, I got hands on experience on several skills through this internship with solving from basic tasks to building a real life project.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < value ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <motion.div variants={fadeUp} className="group overflow-hidden rounded-xl border border-black bg-white shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative aspect-[16/9] bg-black">
        <video
          src={t.videoUrl}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="font-inter font-semibold text-lg md:text-xl text-black">{t.studentName}</h4>
          <Stars value={t.rating} />
        </div>
        <p className="text-sm md:text-base text-[#333] font-lato">{t.college}</p>
        <p className="text-xs md:text-sm font-medium text-brand-blue uppercase">{t.course}</p>
        <p className="text-sm md:text-base text-subtext font-open-sans mt-1">{t.testimonialText}</p>
      </div>
    </motion.div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full px-4 md:px-[42px] py-4 bg-white/90 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/10">
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
                  <CtaLink className="bg-brand-blue text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
                    Build Your Portfolio (It's Free)
                  </CtaLink>
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
      <motion.section
        className="w-full bg-brand-gray border border-black px-4 md:px-[90px] py-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            <motion.h2 variants={fadeUp} className="max-w-[748px] text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
              Don't Just Take Our Word For It. See What Our Interns Have Built.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center font-lato text-lg md:text-xl leading-[120%] text-black px-4">
              Our interns come from India's top colleges and leave with a portfolio of real-world projects. They don't just learn; they build, innovate, and get ready for their first job. Here are a few of their stories.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
          <motion.button variants={fadeUp} className="bg-gradient-to-r from-brand-blue to-brand-blue-alt text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase shadow-lg hover:shadow-xl transition-all">
            Build Your Portfolio
          </motion.button>
        </div>
      </motion.section>

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
          <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
            Start Building Your Experience
          </CtaLink>
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
            <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Build the Proof of Your Skills
            </CtaLink>
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
            <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Unlock Job Opportunities
            </CtaLink>
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
            <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-sm md:text-base px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase self-start hover:bg-brand-blue transition-colors">
              Get Professional Feedback Now
            </CtaLink>
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
          <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-xl px-14 py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
            Build Your Portfolio
          </CtaLink>
        </div>
      </section>

      {/* Method Section */}
      <section className="w-full bg-white border border-black px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            <h2 className="max-w-[748px] text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
              Go Beyond Courses. Our Project-First Method is How You Get Hired.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
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
                <div key={index} className="border-2 border-black bg-white flex items-center justify-center py-12 md:py-[70px] px-6 md:px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-lg md:text-2xl font-bold text-black leading-[130%]">
                      {feature.title}
                    </h3>
                    <p className="font-open-sans text-base md:text-2xl text-black leading-[130%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
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
                <div key={index} className="border-2 border-black bg-white flex items-center justify-center py-12 md:py-[70px] px-6 md:px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-lg md:text-2xl font-bold text-black leading-[130%]">
                      {feature.title}
                    </h3>
                    <p className="font-open-sans text-base md:text-2xl text-black leading-[130%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CtaLink className="bg-brand-blue text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
            Build Your Portfolio
          </CtaLink>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="w-full bg-brand-gray border border-black px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            <h2 className="max-w-[748px] text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
              Your Journey from Fresher to Hired in 3 Simple Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
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
                <div key={index} className="border-2 border-black bg-white flex items-center justify-center py-16 md:py-[140px] px-6 md:px-[157px]">
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-open-sans text-lg md:text-2xl font-bold text-black leading-[130%]">
                      {step.title}
                    </h3>
                    <p className="font-open-sans text-base md:text-2xl text-black leading-[130%]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CtaLink className="bg-brand-blue text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue-alt transition-colors">
            Start Building Now (It's Free)
          </CtaLink>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white px-4 md:px-[331px] py-12 md:py-20">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <h2 className="font-inter text-2xl md:text-3xl lg:text-[40px] font-bold leading-[125%] text-dark-blue text-center px-4">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[777px]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col gap-4 md:gap-6">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFaq(item)}
                >
                  <h3 className="font-inter text-lg md:text-2xl font-bold leading-[164%] text-dark-blue">
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
      <section className="w-full bg-brand-gray px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[1303px] mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          <div className="w-full lg:w-[586px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#333] font-lato text-lg md:text-xl leading-[150%]">
                Over 90% of tech recruiters reject 'freshers' for one reason: no real-world projects.
              </p>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="font-inter text-2xl md:text-3xl lg:text-[42px] font-bold leading-[120%] text-black">
                    Your Career Won't Wait. Why Should You?
                  </h2>
                  <p className="text-[#333] font-lato text-lg md:text-xl leading-[150%] text-justify">
                    This is the moment you stop being a "fresher" and start becoming a professional. Every day you wait is another day a competitor is building the portfolio that will land them the job you want. BroskiesHub is your direct path from a theoretical degree to a tangible, job-winning portfolio that proves you are ready. The choice is simple: wait for an opportunity, or build one right now.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-lg md:text-xl text-[#333]">
                        Build a Professional, Job-Winning Portfolio
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-lg md:text-xl text-[#333]">
                        Get Expert Feedback & Industry Mentorship
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="font-inter text-lg md:text-xl text-[#333]">
                        Unlock Direct Referrals to Hiring Startups
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CtaLink className="bg-brand-blue-alt text-white font-bold font-lato text-lg md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-lg uppercase hover:bg-brand-blue transition-colors">
                    Start Building Now (It's Free)
                  </CtaLink>
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

      {/* Footer */}
      <footer className="w-full bg-white border border-black px-4 md:px-[90px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          <h2 className="max-w-[748px] text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold leading-[120%] text-black px-4">
            Footer
          </h2>
        </div>
      </footer>
    </div>
  );
}
