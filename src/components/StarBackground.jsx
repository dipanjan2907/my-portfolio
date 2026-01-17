import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Satellite } from "lucide-react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.05 + 0.01;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          "255, 255, 255", // White
          "200, 240, 255", // Blue-ish White
          "255, 220, 220", // Red-ish White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.opacity += this.speed * this.twinkleDir;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleDir *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        this.angle = (Math.floor(Math.random() * 30) + 30) * (Math.PI / 180);
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 3000;
        this.active = false;
      }

      update() {
        if (this.active) {
          this.x -= this.speed * Math.cos(this.angle);
          this.y += this.speed * Math.sin(this.angle);
          if (this.x < 0 || this.y > canvas.height) {
            this.active = false;
            this.waitTime = new Date().getTime() + Math.random() * 3000 + 3000;
          }
        } else {
          if (this.waitTime < new Date().getTime()) {
            this.active = true;
            this.x = Math.random() * canvas.width + 200;
            this.y = -100;
          }
        }
      }

      draw() {
        if (!this.active) return;
        ctx.strokeStyle = "rgba(255, 255, 255, " + Math.random() + ")";
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + this.len * Math.cos(this.angle),
          this.y - this.len * Math.sin(this.angle),
        );
        ctx.stroke();
      }
    }

    const stars = Array.from({ length: 200 }, () => new Star());

    const shootingStars = Array.from({ length: 3 }, () => new ShootingStar());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Draw Shooting Stars
      shootingStars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 bg-cyber-black overflow-hidden pointer-events-none">
      {/* Canvas for Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* REALISTIC GALAXY IMAGE */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] pointer-events-none z-0 opacity-60 mix-blend-screen"
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        <img
          src="./images/galaxy1.jpeg"
          alt="Galaxy"
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Floating Space Objects */}
      <motion.div
        initial={{ x: "-10vw", y: "110vh", rotate: 45 }}
        animate={{
          x: "120vw",
          y: "-20vh",
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 10,
        }}
        className="absolute z-10 opacity-60"
      >
        <div className="relative">
          <Rocket size={40} className="text-gray-400 rotate-45" />
          <div className="absolute top-8 left-[-5px] w-4 h-12 bg-gradient-to-t from-transparent to-orange-500 blur-md rotate-45 opacity-80 animate-pulse"></div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-10 z-10 opacity-40"
      >
        <Satellite size={50} className="text-gray-500" />
      </motion.div>
    </div>
  );
};

export default StarBackground;
