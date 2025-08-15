import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

const courseIcons = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaDatabase, name: "SQL" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaLinux, name: "Linux" },
];

export default function Carousel() {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "1500px",
        backgroundColor: "#f0f0f0",
        padding: "40px 0",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content", // ensures the content width doesn't exceed
        }}
        animate={{ x: ["0%", "-50%"] }} // move left by 50% of content
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate for smooth looping */}
        {[...courseIcons, ...courseIcons].map((course, index) => {
          const Icon = course.icon;
          return (
            <div
              key={index}
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            >
              <Icon style={{ fontSize: "40px", color: "#003347" }} />
              <span
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                {course.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
