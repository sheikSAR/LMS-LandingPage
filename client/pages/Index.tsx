import React, { useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  Check,
  Phone,
  Star,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Users,
  Code2,
  BookOpen,
  Award,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA_URL = "https://lms.broskieshub.com";

function CtaLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={CTA_URL} className={className}>
      {children}
    </a>
  );
}

function ParallaxBox({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.025]);
  return (
    <motion.div ref={ref} style={{ y, scale }} className={className}>
      {children}
    </motion.div>
  );
}

const testimonials = [
  {
    id: "1",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756210706/mohd_anas_curu7f.mp4",
    studentName: "MOHD ANAS",
    rating: 5,
    college: "Indian Institute of Technology, Madras",
    course: "Internship Program",
    testimonialText:
      "It was a very nice experience and I gained a lot of experience and skills.",
  },
  {
    id: "2",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.10.01_e4ea9161_ma5xr2.mp4",
    studentName: "Dashami Jituri",
    rating: 4,
    college: "Usha Mittal Institute of Technology, SNDT University, Mumbai",
    course: "Development Internship",
    testimonialText:
      "My experience at BroskiesHub was both enriching and transformative. I not only strengthened my technical foundation through real-world project development but also learned the importance of creativity, innovation, and attention to detail. The supportive environment encouraged me to go beyond requirements and build a project that truly stands out.",
  },
  {
    id: "3",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150952/WhatsApp_Video_2025-08-26_at_01.10.01_45d1e2b0_pwt6qp.mp4",
    studentName: "Firdaush Alam",
    rating: 5,
    college: "Secab Institute of Engineering and Technology",
    course: "Python Development Internship",
    testimonialText:
      "During my internship at BroskiesHub, I gained valuable hands-on experience working as a Python Developer. I collaborated on multiple projects involving React, Flask, RESTful APIs, and database management, which enhanced my full-stack development skills. The supportive environment helped me grow technically and professionally, preparing me well for real-world software development challenges.",
  },
  {
    id: "4",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.10.00_aecd1003_ujhxts.mp4",
    studentName: "Jivika K Ambade",
    rating: 4,
    college: "SNDTWU",
    course: "Internship Program",
    testimonialText:
      "It was amazing. The team was really supportive throughout the internship. I never thought I would be chosen as a top performer but my efforts paid off and I was chosen as one of the top performers",
  },
  {
    id: "5",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150952/WhatsApp_Video_2025-08-26_at_01.09.57_b8494776_xho0mo.mp4",
    studentName: "Atharva Mandlik",
    rating: 5,
    college: "MIT-WPU PUNE",
    course: "Python Development Internship",
    testimonialText:
      "My internship at BroskiesHub was a valuable learning experience where I gained hands-on exposure to real-world Python development. I had the opportunity to build a complete Restaurant Billing ERP System, which enhanced my skills in GUI design, database management, and project structuring. The supportive environment at BroskiesHub helped me strengthen both my technical expertise and problem-solving abilities.",
  },
  {
    id: "6",
    videoUrl:
      "https://res.cloudinary.com/dk2wudmxh/video/upload/v1756150951/WhatsApp_Video_2025-08-26_at_01.09.57_4c45e0bb_dmncwj.mp4",
    studentName: "GUNGUN PAL",
    rating: 5,
    college: "ABDUL KALAM TECHNICAL UNIVERSITY",
    course: "Development Internship",
    testimonialText:
      "My experience was amazing at BroskiesHub, I got hands on experience on several skills through this internship with solving from basic tasks to building a real life project.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < value ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-black/10 bg-white/80 backdrop-blur-xl hover:bg-white shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative aspect-[16/9]">
        <video src={t.videoUrl} controls playsInline preload="metadata" className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2">
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

const primaryBtn =
  "relative inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 md:py-4 font-semibold text-white transition-all shadow-[0_8px_20px_-6px_rgba(39,39,230,0.5)] bg-gradient-to-r from-brand-blue to-brand-blue-alt hover:shadow-[0_12px_30px_-6px_rgba(39,39,230,0.6)] hover:brightness-110 active:scale-[0.98]";
const outlineBtn =
  "relative inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 md:py-4 font-semibold border border-black/10 bg-white/70 backdrop-blur hover:bg-white text-black transition-all shadow-sm hover:shadow-md active:scale-[0.98]";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  // Hero subtle parallax blobs
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -40]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, 30]);

  const navLinks = useMemo(
    () => [
      { href: "#features", label: "Features" },
      { href: "#testimonials", label: "Stories" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_500px_at_20%_-10%,rgba(39,39,230,0.08),transparent_60%),radial-gradient(900px_400px_at_110%_10%,rgba(36,27,65,0.06),transparent_55%)]">
      {/* Navigation */}
      <nav className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/10">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759233080/BroskiesHub_Incubated_Logo_bwrago.png"
              alt="BroskiesHub Logo"
              className="h-7 md:h-8"
            />
          </a>
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-2 py-2 text-sm font-medium text-gray-800 hover:text-black transition-colors group"
              >
                {l.label}
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover:w-4/5" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 md:gap-3 bg-brand-blue text-white rounded-full px-3 md:px-5 py-2 shadow-sm hover:shadow-md transition-all">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[13px] md:text-sm font-bold">+918148040507</span>
            </div>
            <button className={outlineBtn}>For Companies</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div style={{ y: blob1Y }} className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full opacity-60 blur-3xl bg-gradient-to-br from-brand-blue/30 to-brand-blue-alt/20" />
        <motion.div style={{ y: blob2Y }} className="pointer-events-none absolute -bottom-20 -right-24 size-[360px] rounded-full opacity-60 blur-3xl bg-gradient-to-tr from-[#241B41]/20 to-brand-blue/10" />
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-10 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#333] font-lato text-base md:text-lg">
              Join over 2700+ students from 100+ colleges elevating their careers with us.
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-3 font-inter text-[34px] md:text-[48px] lg:text-[60px] font-extrabold leading-[1.1] tracking-[-0.02em] text-black"
            >
              Build the Experience. Get the Job.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-[#333] font-open-sans text-base md:text-lg leading-relaxed">
              Go beyond theory with a project-first, mentor-guided program. Ship production-grade work, grow a job-ready
              portfolio on GitHub, and unlock direct referrals to hiring startups.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <CtaLink className={primaryBtn}>Build Your Portfolio</CtaLink>
              <a href="#features" className={outlineBtn}>
                Explore Features
              </a>
            </motion.div>
          </motion.div>

          <ParallaxBox className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
            <img
              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759230673/heroSec1_1_wx1ofa.jpg"
              alt="Students coding together in a modern classroom"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </ParallaxBox>
        </div>
      </section>

      {/* Our interns from - logos marquee */}
      <section className="px-4 md:px-8 py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-inter text-2xl md:text-3xl lg:text-[40px] font-extrabold">Our interns from</h2>
          <p className="mt-2 text-center text-gray-700">Students from universities across India trust our program.</p>

          {(() => {
            const logos = [
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227713/karunya-institute-of-technology-and-sciences-logo_qjcgqo.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227703/national-institute-of-technology-calicut-logo_fh1b65.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227686/cochin-university-of-science-and-technology-logo_rxlz1a.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227680/national-institute-of-technology-raipur-logo_dhsqey.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227673/jaypee-institute-of-information-technology-logo_aqedqf.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227661/maulana-azad-national-institute-of-technology-logo_ojxiwm.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227648/sastra-university-logo_yqccgo.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227644/university-of-mumbai-logo_ixgbci.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227638/indian-institute-of-information-technology-allahabad-logo_wyojfs.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227632/birla-institute-of-technology-logo_e21n9k.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227625/national-institute-of-technology-durgapur-logo_j4mwcw.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227619/malaviya-national-institute-of-technology-jaipur-logo_tgsy5g.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227615/annamalai-university-logo_a87r0m.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227610/pondicherry-university-logo_epdx6b.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227607/university-of-hyderabad-logo_adpq05.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227601/jawaharlal-nehru-university-logo_xaa5xk.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227595/sardar-vallabhbhai-national-institute-of-technology-surat-logo_hnq0rx.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227591/sathyabama-institute-of-science-and-technology-logo_to74fs.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227585/national-institute-of-technology-karnataka-logo_pyvxcg.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227582/saveetha-university-logo_fgesrj.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227576/indian-institute-of-technology-hyderabad-logo_afqygg.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227569/national-islamic-university-logo_yr1yah.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227566/chitkara-university-punjab-logo_eulo7q.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227561/lovely-professional-university-logo_snhy7w.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227558/university-of-calcutta-logo_ultona.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227552/aligarh-muslim-university-logo_c531m9.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227537/national-institute-of-technology-kurukshetra-logo_myrr6m.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227530/amity-university-logo_fxbltf.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227526/k-l-university-logo_cqkstn.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227520/birla-institute-of-technology-and-science-logo_a6czkc.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227512/tata-institute-of-fundamental-research-logo_el1uws.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227507/national-institute-of-technology-tiruchirappalli-logo_ntmuzt.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227497/delhi-technological-university-logo_npklbm.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227488/savitribai-phule-pune-university-logo_vqna8m.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227484/national-institute-of-technology-rourkela-logo_vsgwzi.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227479/indian-institute-of-technology-indore-logo_ypoa9o.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227473/indian-institute-of-technology-guwahati-logo_gxxri9.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227468/thapar-institute-of-engineering-and-technology-logo_gl8l1x.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227463/srm-institute-of-science-and-technology-logo_j9e34q.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227455/university-of-delhi-logo_pyeluu.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227445/amrita-university-logo_dqli4h.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227442/anna-university-logo_iexbst.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227437/jadavpur-university-logo_buvkfk.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227431/indian-institute-of-technology-roorkee-logo_tuije9.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227425/indian-institute-of-technology-madras-logo_lsql49.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227419/indian-institute-of-technology-bombay-logo_igg37n.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227414/indian-institute-of-technology-kanpur-logo_fym4aa.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227407/vit-university-logo_r4azah.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227398/indian-institute-of-technology-kharagpur-logo_fogefr.png",
              "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227329/indian-institute-of-technology-delhi-logo_gjmraq.png",
            ];
            const row1 = logos.filter((_, i) => i % 2 === 0);
            const row2 = logos.filter((_, i) => i % 2 !== 0);

            const Logo = ({ src }: { src: string }) => (
              <div className="shrink-0 rounded-xl bg-white/80 border border-black/10 p-3 md:p-4 backdrop-blur hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.04] transition-all">
                <img src={src} alt="University logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain" loading="lazy" />
              </div>
            );

            const Row = ({ data, dir, speed }: { data: string[]; dir: "ltr" | "rtl"; speed: number }) => (
              <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                <div
                  className="flex min-w-max items-center gap-6 md:gap-10 lg:gap-12 will-change-transform"
                  style={{ animation: `${dir === "rtl" ? "marquee-rtl" : "marquee-ltr"} ${speed}s linear infinite` }}
                >
                  {data.concat(data).map((logo, idx) => (
                    <Logo key={`${logo}-${idx}`} src={logo} />
                  ))}
                </div>
              </div>
            );

            return (
              <div className="mt-8 space-y-6">
                <Row data={row1} dir="ltr" speed={55} />
                <Row data={row2} dir="rtl" speed={45} />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Metrics / Social proof */}
      <motion.section
        id="testimonials"
        className="relative w-full px-4 md:px-8 py-14 md:py-20 bg-gradient-to-b from-white/70 to-brand-gray/40 border-y border-black/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            {[
              { label: "Students", value: "2,700+" },
              { label: "Colleges", value: "100+" },
              { label: "Projects Shipped", value: "1,200+" },
              // { label: "Placements & Referrals", value: "500+" },
              { label: "Tie-up Companies", value: "150+" },
            ].map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white/70 backdrop-blur-xl p-5 border border-black/10 shadow-sm hover:shadow-lg transition-all"
              >
                <p className="text-[12px] uppercase tracking-wide text-gray-600">{m.label}</p>
                <p className="mt-1 font-inter text-2xl md:text-3xl font-extrabold text-black">{m.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2 variants={fadeUp} className="text-center font-inter text-2xl md:text-3xl lg:text-[44px] font-bold">
            What our interns say
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 mb-8 text-center text-gray-700 max-w-2xl mx-auto">
            Real stories from students who turned projects into offers.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaLink className={primaryBtn}>Start Building Today</CtaLink>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <section id="features" className="px-4 md:px-8 py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.img
            src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759230672/heroSec2_1_go3rbv.jpg"
            alt="Student learning with laptop in a collaborative classroom"
            className="w-full h-[260px] sm:h-[360px] md:h-[440px] object-cover rounded-2xl border border-black/10 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            loading="lazy"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h3 variants={fadeUp} className="font-inter text-[28px] md:text-[36px] font-extrabold">
              A modern, project-first path to job readiness
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-3 text-gray-700">
              Master fundamentals with hands-on tasks, ship a real product from a professional brief, and craft an
              innovation project that showcases your unique creativity.
            </motion.p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: <Rocket className="text-brand-blue" />, title: "Guided real projects", desc: "Build complete apps end‑to‑end from industry briefs." },
                { icon: <Code2 className="text-brand-blue" />, title: "Production-grade code", desc: "Follow reviews and best practices used by teams." },
                { icon: <Users className="text-brand-blue" />, title: "Mentor feedback", desc: "AI quick checks + expert reviews to level up." },
                { icon: <ShieldCheck className="text-brand-blue" />, title: "Referrals that count", desc: "Top performers shared with hiring networks." },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-2 rounded-full bg-brand-blue/10">{f.icon}</div>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-gray-700">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <CtaLink className={primaryBtn}>Build the Proof of Your Skills</CtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Method highlights */}
      <section className="px-4 md:px-8 py-16 md:py-20 bg-gradient-to-b from-white to-brand-gray/40 border-y border-black/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-inter text-2xl md:text-3xl lg:text-[40px] font-extrabold">
            Go beyond courses. Ship real products.
          </h2>
          <p className="mt-2 text-center text-gray-700 max-w-2xl mx-auto">
            Our 3‑phase method takes you from foundations to a standout innovation project with a portfolio recruiters love.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Real‑world guided projects",
                description:
                  "Build a complete application from a professional brief—just like real teams do.",
                icon: <BookOpen className="text-brand-blue" />,
              },
              {
                title: "GitHub portfolio that matters",
                description:
                  "Clean commits, readable code and a live demo recruiters can trust.",
                icon: <Code2 className="text-brand-blue" />,
              },
              {
                title: "Mentorship & expert reviews",
                description: "AI feedback daily + structured mentor reviews for big milestones.",
                icon: <Award className="text-brand-blue" />,
              },
              {
                title: "Direct referrals to startups",
                description:
                  "Top performers shared with our network for interview‑ready roles.",
                icon: <Users className="text-brand-blue" />,
              },
              {
                title: "Accessible to everyone",
                description:
                  "Open access program focused on real skills and outcomes.",
                icon: <ShieldCheck className="text-brand-blue" />,
              },
              {
                title: "Structured 3‑phase program",
                description:
                  "From tasks ➝ guided project ➝ innovation project that stands out.",
                icon: <Rocket className="text-brand-blue" />,
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-brand-blue/10">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaLink className={primaryBtn}>Start Building</CtaLink>
          </div>
        </div>
      </section>

      {/* Journey steps */}
      <section className="px-4 md:px-8 py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-inter text-2xl md:text-3xl lg:text-[40px] font-extrabold">
            Your journey in 3 steps
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Build your foundation",
                description: "Hands‑on tasks with instant AI feedback to accelerate learning.",
              },
              {
                title: "Create your portfolio",
                description: "Ship a complete real‑world application that becomes your centerpiece.",
              },
              { title: "Connect to opportunity", description: "Top performance earns direct referrals to hiring startups." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <CtaLink className={primaryBtn}>Start Now</CtaLink>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="px-4 md:px-8 py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-center font-inter text-2xl md:text-3xl lg:text-[40px] font-extrabold">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-black/10">
            {[
              {
                q: "What do I need to get started?",
                a: "A GitHub account, basic programming knowledge, and motivation to build and learn.",
              },
              {
                q: "How do referrals work?",
                a: "We evaluate project quality and consistency. Top performers are shared with our hiring network for suitable roles.",
              },
              {
                q: "Will I get mentor support?",
                a: "Yes. You’ll get instant AI feedback on tasks and scheduled mentor reviews for milestones.",
              },
              {
                q: "Do I get a certificate?",
                a: "Yes. A verified certificate is included, but the focus is your portfolio that recruiters actually review.",
              },
              {
                q: "How much time should I commit?",
                a: "8–10 hours per week is ideal. The program is flexible—progress at your own pace.",
              },
            ].map((item, idx) => (
              <div key={item.q} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="font-inter text-base md:text-lg font-semibold text-dark-blue">{item.q}</h3>
                  <ChevronDown className={`w-4 h-4 text-[#333] transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? "auto" : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-sm md:text-base text-gray-700">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-brand-gray/40 to-white">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#333] font-lato text-base md:text-lg">
              90% of tech recruiters reject profiles without real‑world projects.
            </p>
            <h2 className="mt-2 font-inter text-[28px] md:text-[36px] lg:text-[42px] font-extrabold">
              Your career won’t wait. Start building today.
            </h2>
            <p className="mt-4 text-[#333] font-open-sans text-base md:text-lg leading-relaxed">
              Move from theory to a tangible, job‑winning portfolio. Join a community of makers shipping real work and
              unlocking interviews.
            </p>
            <div className="mt-4 space-y-2">
              {[
                "Build a professional, job‑winning portfolio",
                "Get expert feedback and mentorship",
                "Unlock direct referrals to hiring startups",
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="font-inter text-sm md:text-base text-[#333]">{line}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <CtaLink className={primaryBtn}>Start Building</CtaLink>
              <a href="#faq" className={outlineBtn}>
                See FAQs
              </a>
            </div>
          </div>
          <ParallaxBox className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
            <img
              src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759230671/heroSec3_1_x5bdpv.jpg"
              alt="Learners collaborating with laptops in a modern classroom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </ParallaxBox>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full bg-gradient-to-b from-white to-brand-gray/40 border-t border-black/10">
        <div className="px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/af5815d5c8e98fab36d2793c7dc62abb9e93d0ce?width=322"
                alt="BroskiesHub"
                className="h-8 mb-4"
              />
              <p className="text-sm text-[#333] font-open-sans">Build the experience. Get the job.</p>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2 text-[#333]">
                <li>
                  <a href="#features" className="hover:text-brand-blue transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-brand-blue transition-colors">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-blue transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-blue transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://facebook.com/broskieshub"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-white/70 backdrop-blur border border-black/10 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/broskieshub/"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white/70 backdrop-blur border border-black/10 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/broskieshub"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-white/70 backdrop-blur border border-black/10 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-inter font-semibold text-lg mb-3">Contact</h4>
              <ul className="space-y-3 text-[#333]">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5" />
                  <a className="hover:text-brand-blue" href="mailto:support@broskieshub.com">
                    support@broskieshub.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a className="hover:text-brand-blue" href="tel:+918148040507">
                    +918148040507
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>
                    Broskieshub, ACIC-KIF, KARE, Central Library 2nd Floor, Anand Nagar, Krishnan Koil, S.Ramachandrapuram
                    Virudhunagar Srivilliputhur Tamil Nadu India 626126
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#333]">
            <p>© {new Date().getFullYear()} BroskiesHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <CtaLink className="text-brand-blue font-semibold hover:underline">Build Your Portfolio</CtaLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
