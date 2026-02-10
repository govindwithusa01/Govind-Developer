import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Sparkles, 
  Rocket, 
  ShoppingCart, 
  RefreshCw, 
  TrendingUp,
  Mail,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { Card } from '@/react-app/components/ui/card';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const services = [
    {
      icon: Sparkles,
      title: 'AI Website Development',
      description: 'Cutting-edge websites built with AI tools for faster delivery and smarter functionality.',
    },
    {
      icon: Code2,
      title: 'Business Websites',
      description: 'Professional websites that establish your brand and drive business growth.',
    },
    {
      icon: Rocket,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and boost conversions.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete online stores with payment integration and inventory management.',
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern, engaging digital experience.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your website live in days, not months, thanks to AI-powered development.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Every website is thoroughly tested and optimized for performance.',
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Quick response times and ongoing support to keep your site running smoothly.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Helping businesses grow with websites that convert visitors into customers.',
    },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/918434586868', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Navigation Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://019c4875-9efa-769a-a23d-ae5a0e7a50d1.mochausercontent.com/govind-profile-placeholder.dim_800x800.png" 
              alt="Govind Developer Logo" 
              className="w-12 h-12 rounded-full border-2 border-primary/50 shadow-lg shadow-primary/20"
            />
            <div>
              <h3 className="font-bold text-lg">Govind Developer</h3>
              <p className="text-xs text-muted-foreground">AI Website Specialist</p>
            </div>
          </div>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-primary to-chart-3 hover:from-primary/90 hover:to-chart-3/90"
            onClick={openWhatsApp}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-3/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-3/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-3 rounded-full blur-2xl opacity-30 animate-pulse" />
              <img 
                src="https://019c4875-9efa-769a-a23d-ae5a0e7a50d1.mochausercontent.com/govind-profile-placeholder.dim_800x800.png" 
                alt="Govind Developer" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Website Development</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Govind Developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Freelance Website Developer & AI Website Specialist
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building fast, affordable, and SEO-friendly websites for businesses, startups, and creators using cutting-edge AI tools.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-chart-3 hover:from-primary/90 hover:to-chart-3/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Your Website Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-3 mx-auto mb-8" />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-foreground font-semibold">Govind Developer</span>, a freelance website developer who specializes in leveraging AI tools to create exceptional digital experiences.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                I help businesses, startups, and creators establish their online presence with websites that are:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Lightning-fast and optimized',
                  'Budget-friendly and affordable',
                  'AI-powered for smart functionality',
                  'SEO-friendly for better rankings',
                  'Fully mobile-responsive',
                  'Built with modern technologies'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Services
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-3 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Why Choose Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-3 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of working with a dedicated professional
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.15}>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-3 mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to take your business online? Get in touch today and let's discuss your project.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-chart-3/5 backdrop-blur-sm border-2 border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg hover:bg-background transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a 
                      href="https://wa.me/918434586868" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-primary transition-colors duration-300"
                    >
                      +91 8434586868
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/80 rounded-lg hover:bg-background transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:govindofficial027@gmail.com"
                      className="text-lg font-semibold hover:text-primary transition-colors duration-300 break-all"
                    >
                      govindofficial027@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-chart-3 hover:from-primary/90 hover:to-chart-3/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <img 
              src="https://019c4875-9efa-769a-a23d-ae5a0e7a50d1.mochausercontent.com/govind-profile-placeholder.dim_800x800.png" 
              alt="Govind Developer Logo" 
              className="w-16 h-16 rounded-full border-2 border-primary/50 shadow-lg mb-4"
            />
            <h3 className="font-bold text-lg mb-1">Govind Developer</h3>
            <p className="text-sm text-muted-foreground mb-4">AI Website Specialist</p>
          </div>
          <p className="text-muted-foreground mb-2 text-center">
            © {new Date().getFullYear()} Govind Developer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Building the future, one website at a time.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 transition-all duration-300 p-0 animate-pulse hover:animate-none"
          onClick={openWhatsApp}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </motion.div>
    </div>
  );
}
