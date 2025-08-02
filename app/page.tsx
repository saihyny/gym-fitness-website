"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Star,
  Check,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Clock,
  Users,
  Award,
  Dumbbell,
  Heart,
  Zap,
  Target,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Transformations", href: "#transformations" },
  { name: "Book Demo", href: "#book-demo" },
]

export default function FitZoneBangalore() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            FitZone<span className="text-orange-500">BLR</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-background border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block text-left w-full text-sm font-medium hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-40 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner1.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center text-white min-h-screen py-20">
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-12 font-light max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bangalore's Premier Fitness Studio – Where Champions Are Made
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-400">500+</div>
                <div className="ml-2 text-sm md:text-base">Happy Members</div>
              </motion.div>

              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>

              <motion.div
                className="flex items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-400">5+</div>
                <div className="ml-2 text-sm md:text-base">Years Experience</div>
              </motion.div>

              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>

              <motion.div
                className="flex items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-400">15+</div>
                <div className="ml-2 text-sm md:text-base">Expert Trainers</div>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                onClick={() => scrollToSection("#book-demo")}
              >
                Book Free Demo
                <ChevronRight className="ml-2" size={20} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("#programs")}
              >
                View Programs
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              onClick={() => scrollToSection("#programs")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm mb-2 font-light">SCROLL DOWN</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect program tailored to your fitness goals and lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                description: "Build muscle and increase power with our comprehensive strength programs",
                icon: <Dumbbell className="w-8 h-8" />,
                features: ["Free Weights", "Machine Training", "Progressive Overload", "Form Correction"],
                image: "strength training gym equipment",
              },
              {
                title: "HIIT Cardio",
                description: "High-intensity interval training for maximum calorie burn and endurance",
                icon: <Zap className="w-8 h-8" />,
                features: ["Fat Burning", "Endurance Building", "Time Efficient", "Group Classes"],
                image: "HIIT cardio workout session",
              },
              {
                title: "Functional Fitness",
                description: "Real-world movement patterns for everyday strength and mobility",
                icon: <Target className="w-8 h-8" />,
                features: ["Movement Quality", "Core Stability", "Injury Prevention", "Athletic Performance"],
                image: "functional fitness training",
              },
              {
                title: "Yoga & Flexibility",
                description: "Improve flexibility, balance, and mental well-being through yoga",
                icon: <Heart className="w-8 h-8" />,
                features: ["Stress Relief", "Flexibility", "Mind-Body Connection", "Recovery"],
                image: "yoga studio with mats and peaceful environment",
              },
              {
                title: "Personal Training",
                description: "One-on-one coaching tailored to your specific goals and needs",
                icon: <Users className="w-8 h-8" />,
                features: ["Customized Plans", "Expert Guidance", "Faster Results", "Accountability"],
                image: "personal trainer working with client",
              },
              {
                title: "Group Classes",
                description: "Motivating group workouts in a fun and energetic environment",
                icon: <Award className="w-8 h-8" />,
                features: ["Community Support", "Variety", "Motivation", "Cost Effective"],
                image: "group fitness class in action",
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('https://source.unsplash.com/random/400x300?${program.image}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute top-4 left-4 text-orange-500 bg-white/90 p-3 rounded-full">
                      {program.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="w-4 h-4 mr-2 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Trainers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our certified professionals dedicated to your fitness success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                specialty: "Strength & Conditioning",
                experience: "8 Years",
                certifications: ["NASM-CPT", "Precision Nutrition"],
                image: "professional female fitness trainer from India",
              },
              {
                name: "Arjun Reddy",
                specialty: "HIIT & Functional Training",
                experience: "6 Years",
                certifications: ["ACSM-CPT", "TRX Certified"],
                image: "professional male fitness trainer from India",
              },
              {
                name: "Kavya Nair",
                specialty: "Yoga & Wellness",
                experience: "10 Years",
                certifications: ["RYT-500", "Ayurveda Certified"],
                image: "professional yoga instructor from India",
              },
            ].map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="h-80 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('https://source.unsplash.com/random/300x400?${trainer.image}')`,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                    <p className="text-orange-500 font-medium mb-2">{trainer.specialty}</p>
                    <p className="text-muted-foreground mb-4">{trainer.experience} Experience</p>
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, i) => (
                        <div key={i} className="text-sm bg-muted px-2 py-1 rounded inline-block mr-2">
                          {cert}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Membership Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan that fits your lifestyle and fitness goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "₹2,999",
                period: "/month",
                features: [
                  "Gym Access (6 AM - 10 PM)",
                  "Basic Equipment Usage",
                  "Locker Facility",
                  "Mobile App Access",
                  "Progress Tracking",
                ],
                popular: false,
              },
              {
                name: "Premium",
                price: "₹4,999",
                period: "/month",
                features: [
                  "Everything in Basic",
                  "Group Classes (Unlimited)",
                  "2 Personal Training Sessions",
                  "Nutrition Consultation",
                  "Steam & Sauna Access",
                  "Guest Pass (2/month)",
                ],
                popular: true,
              },
              {
                name: "Elite",
                price: "₹7,999",
                period: "/month",
                features: [
                  "Everything in Premium",
                  "Unlimited Personal Training",
                  "Customized Meal Plans",
                  "Recovery Suite Access",
                  "Priority Class Booking",
                  "Quarterly Body Composition Analysis",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className={`h-full p-8 ${plan.popular ? "border-orange-500 border-2 shadow-xl" : "border-border shadow-lg"} hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 text-sm font-medium rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-primary hover:bg-primary/90"}`}
                      onClick={() => scrollToSection("#book-demo")}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Transformations */}
      <section id="transformations" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations from our amazing members in Bangalore
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                age: 32,
                program: "Weight Loss Program",
                duration: "6 months",
                result: "Lost 25 kg",
                testimonial:
                  "FitZone changed my life completely. The trainers are amazing and the community is so supportive!",
                beforeImage: "overweight man before transformation",
                afterImage: "fit man after weight loss transformation",
              },
              {
                name: "Sneha Patel",
                age: 28,
                program: "Strength Training",
                duration: "4 months",
                result: "Gained 8 kg muscle",
                testimonial:
                  "I never thought I could be this strong. The personal training sessions made all the difference.",
                beforeImage: "woman before strength training",
                afterImage: "strong woman after muscle building transformation",
              },
              {
                name: "Vikram Singh",
                age: 35,
                program: "Complete Transformation",
                duration: "8 months",
                result: "Lost 30 kg, Gained Muscle",
                testimonial: "From being overweight to running marathons. FitZone gave me a new lease on life!",
                beforeImage: "man before complete body transformation",
                afterImage: "athletic man after complete transformation",
              },
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="grid grid-cols-2 h-64">
                      <div
                        className="bg-cover bg-center relative"
                        style={{
                          backgroundImage: `url('https://source.unsplash.com/random/200x300?${story.beforeImage}')`,
                        }}
                      >
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                          BEFORE
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-center relative"
                        style={{
                          backgroundImage: `url('https://source.unsplash.com/random/200x300?${story.afterImage}')`,
                        }}
                      >
                        <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">Age: {story.age}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-500 font-bold">{story.result}</div>
                        <div className="text-sm text-muted-foreground">{story.duration}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{story.program}</p>
                    <p className="text-sm italic">"{story.testimonial}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Free Demo Section */}
      <section id="book-demo" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1200x800?gym')",
          }}
        >
          <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Free Demo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your fitness journey? Book a free demo session and experience FitZone Bangalore
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" className="h-12" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Program *</label>
                  <select className="w-full h-12 px-3 border border-input bg-background rounded-md">
                    <option value="">Select a program</option>
                    <option value="strength">Strength Training</option>
                    <option value="hiit">HIIT Cardio</option>
                    <option value="functional">Functional Fitness</option>
                    <option value="yoga">Yoga & Flexibility</option>
                    <option value="personal">Personal Training</option>
                    <option value="group">Group Classes</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <Input type="date" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time</label>
                    <select className="w-full h-12 px-3 border border-input bg-background rounded-md">
                      <option value="">Select time slot</option>
                      <option value="morning">Morning (6 AM - 10 AM)</option>
                      <option value="afternoon">Afternoon (10 AM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                      <option value="night">Night (8 PM - 10 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Fitness Goals (Optional)</label>
                  <Textarea placeholder="Tell us about your fitness goals and any specific requirements..." rows={4} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-medium"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Free Demo Session
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Our team will contact you within 24 hours to confirm your demo session
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                FitZone<span className="text-orange-500">BLR</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Bangalore's premier fitness studio dedicated to transforming lives through fitness.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="hover:text-orange-500">
                  <Instagram size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-orange-500">
                  <Facebook size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-orange-500">
                  <Twitter size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-orange-500">
                  <Youtube size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-muted-foreground hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Strength Training</li>
                <li>HIIT Cardio</li>
                <li>Functional Fitness</li>
                <li>Yoga & Flexibility</li>
                <li>Personal Training</li>
                <li>Group Classes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground">
                    <p>123 MG Road, Brigade Gateway</p>
                    <p>Bangalore, Karnataka 560025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-muted-foreground">info@fitzoneblr.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-muted-foreground">Mon-Sun: 6 AM - 10 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FitZone Bangalore. All rights reserved. | Designed for fitness enthusiasts in Bangalore</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
