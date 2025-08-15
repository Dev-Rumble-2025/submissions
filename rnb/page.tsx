"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Home,
  User,
  Code,
  FolderOpen,
  BookOpen,
  FileText,
  Mail,
  Moon,
  Sun,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  MapPin,
  GraduationCap,
  Award,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
]

const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "AI/ML", category: "Specialization" },
  { name: "DevOps", category: "Specialization" },
  { name: "Cybersecurity", category: "Specialization" },
  { name: "Blockchain", category: "Emerging" },
  { name: "Ethical AI", category: "Research" },
  { name: "XAI", category: "Research" },
]

const projects = [
  {
    title: "QR Code Attendance System",
    description: "A modern attendance tracking system using QR codes for efficient student and employee management.",
    tech: ["React", "Node.js", "MongoDB", "QR Code API"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300&text=QR+Attendance+System",
  },
  {
    title: "Restaurant Website with Delivery",
    description: "Full-featured restaurant website with online ordering, delivery tracking, and ingredient listing.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300&text=Restaurant+Website",
  },
  {
    title: "AI Ethics Research Platform",
    description: "Research platform for studying ethical implications of AI in educational systems.",
    tech: ["Python", "Django", "TensorFlow", "React"],
    github: "#",
    live: "#",
    image: "/placeholder.svg?height=200&width=300&text=AI+Ethics+Platform",
  },
]

const blogPosts = [
  {
    title: "Understanding Explainable AI in Education",
    excerpt: "Exploring how XAI can make educational AI systems more transparent and trustworthy.",
    date: "2024-01-15",
    tags: ["AI", "Education", "XAI"],
    image: "/placeholder.svg?height=150&width=250&text=XAI+Blog+Post",
  },
  {
    title: "Getting Started with DevOps for Beginners",
    excerpt: "A comprehensive guide to understanding DevOps principles and practices.",
    date: "2024-01-10",
    tags: ["DevOps", "Tutorial", "Beginner"],
    image: "/placeholder.svg?height=150&width=250&text=DevOps+Guide",
  },
  {
    title: "Cybersecurity Best Practices for Developers",
    excerpt: "Essential security practices every developer should implement in their projects.",
    date: "2024-01-05",
    tags: ["Security", "Development", "Best Practices"],
    image: "/placeholder.svg?height=150&width=250&text=Security+Guide",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Vertical Navigation */}
        <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-200 dark:border-gray-700">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-12 h-12 rounded-xl mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 group ${
                    activeSection === section.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {section.label}
                  </div>
                </motion.button>
              )
            })}
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-around py-2">
            {sections.slice(0, 5).map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`p-3 rounded-lg transition-colors ${
                    activeSection === section.id ? "bg-blue-500 text-white" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <Icon size={20} />
                </button>
              )
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="lg:ml-20">
          {/* Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="mb-8">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Rupak+Gadtaula"
                    alt="Rupak Gadtaula"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl"
                  />
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Rupak Gadtaula
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                  Master's in Computer Science Student
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                  Aspiring AI Software Engineer | Programming Teacher | Ethical AI Researcher
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
                  <MapPin size={16} />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex justify-center gap-4 mb-8">
                  <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                    <Github className="mr-2" size={20} />
                    GitHub
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                  </Button>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="rounded-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Let's Collaborate
                </Button>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <GraduationCap className="mr-3 text-blue-500" />
                      Education
                    </h3>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Master's in Computer Science</CardTitle>
                          <CardDescription>Lincoln University College, Malaysia</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            CGPA: 3.67, 3.87, 4.00 (Progressive improvement)
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Bachelor's in Information Technology</CardTitle>
                          <CardDescription>Texas College of Management and IT, Nepal</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 3.89</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <Target className="mr-3 text-blue-500" />
                      Goals & Certifications
                    </h3>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>PhD Aspiration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Pursuing PhD in Ethical and Explainable AI in Education Systems (XAI)
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Award className="mr-2 text-yellow-500" size={20} />
                            ISO/IEC 27001 Lead Auditor
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Badge variant="secondary">In Progress</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    I'm passionate about creating ethical AI solutions and teaching programming to the next generation.
                    My research focuses on making AI systems more transparent and trustworthy, especially in educational
                    contexts.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {["Frontend", "Backend", "Programming", "Specialization", "Research", "Emerging"].map((category) => (
                    <Card key={category} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill) => (
                              <Badge key={skill.name} variant="secondary">
                                {skill.name}
                              </Badge>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-xl transition-shadow group">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Github size={16} className="mr-1" />
                              Code
                            </Button>
                            <Button size="sm" className="flex-1">
                              <ExternalLink size={16} className="mr-1" />
                              Live
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">Latest Blog Posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-xl transition-shadow group cursor-pointer">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={250}
                            height={150}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">Resume</h2>
                <div className="text-center mb-8">
                  <Button size="lg" className="rounded-full px-8">
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </Button>
                </div>
                <Card className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Rupak Gadtaula</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Master's in Computer Science Student | AI Software Engineer | Programming Teacher
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      Kathmandu, Nepal | rupak@example.com
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Education</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Master's in Computer Science</strong> - Lincoln University College, Malaysia (CGPA:
                          3.67-4.00)
                        </p>
                        <p>
                          <strong>Bachelor's in Information Technology</strong> - Texas College of Management and IT,
                          Nepal (CGPA: 3.89)
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.slice(0, 8).map((skill) => (
                          <Badge key={skill.name} variant="outline">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      I'm always interested in new opportunities, whether it's research collaboration, freelance
                      projects, or discussing the future of ethical AI in education.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="text-blue-500" size={20} />
                        <span>rupak@example.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-blue-500" size={20} />
                        <span>Kathmandu, Nepal</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <Button variant="outline" size="lg">
                        <Github className="mr-2" size={20} />
                        GitHub
                      </Button>
                      <Button variant="outline" size="lg">
                        <Linkedin className="mr-2" size={20} />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                  <Card className="p-6">
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Your Name" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Your Email" />
                      </div>
                      <div>
                        <Input placeholder="Subject" />
                      </div>
                      <div>
                        <Textarea placeholder="Your Message" rows={5} />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700 lg:ml-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Rupak Gadtaula. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
