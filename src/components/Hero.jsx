import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  Bot,
  Code2,
  FolderKanban,
  FileText,
  Database,
  Sparkles,
} from "lucide-react";

import { useRef } from "react";


// =====================================================
// 3D ORBIT
// =====================================================

function TechOrbit() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.25;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <group ref={group}>

      {/* Main Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.65, 0.018, 16, 100]} />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>


      {/* Second Orbit Ring */}
      <mesh rotation={[1.15, 0.25, 0]}>
        <torusGeometry args={[2.05, 0.012, 16, 100]} />

        <meshStandardMaterial
          color="#c084fc"
          emissive="#c084fc"
          emissiveIntensity={0.7}
          transparent
          opacity={0.45}
        />
      </mesh>


      {/* Third Orbit Ring */}
      <mesh rotation={[0.4, 0.8, 0]}>
        <torusGeometry args={[2.35, 0.008, 12, 100]} />

        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.6}
          transparent
          opacity={0.3}
        />
      </mesh>


      {/* Center Outer Sphere */}
      <mesh>
        <sphereGeometry args={[0.75, 48, 48]} />

        <meshStandardMaterial
          color="#7c3aed"
          emissive="#6d28d9"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>


      {/* Center Inner Sphere */}
      <mesh>
        <sphereGeometry args={[0.48, 32, 32]} />

        <meshStandardMaterial
          color="#ddd6fe"
          emissive="#c4b5fd"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.4}
        />
      </mesh>


      {/* Small Orbit Nodes */}

      <mesh position={[1.65, 0, 0]}>
        <sphereGeometry args={[0.11, 20, 20]} />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={2}
        />
      </mesh>


      <mesh position={[-1.65, 0, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />

        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={2}
        />
      </mesh>


      <mesh position={[0, 1.65, 0]}>
        <sphereGeometry args={[0.1, 20, 20]} />

        <meshStandardMaterial
          color="#c084fc"
          emissive="#c084fc"
          emissiveIntensity={2}
        />
      </mesh>


      <mesh position={[0, -1.65, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />

        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={2}
        />
      </mesh>

    </group>
  );
}


// =====================================================
// ICON CARD
// =====================================================

function TechCard({
  icon: Icon,
  title,
  subtitle,
  className,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-20
        ${className}
      `}
    >

      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-3
          bg-white/90
          backdrop-blur-xl
          border
          border-white
          rounded-2xl
          px-3
          py-2.5
          sm:px-4
          sm:py-3
          shadow-[0_15px_40px_rgba(91,33,182,0.16)]
        "
      >

        <div
          className="
            w-9
            h-9
            sm:w-11
            sm:h-11
            rounded-xl
            bg-violet-50
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <Icon
            size={20}
            className="text-violet-600 sm:w-[22px] sm:h-[22px]"
          />
        </div>


        <div className="leading-tight">

          <p
            className="
              text-[10px]
              sm:text-xs
              text-gray-400
            "
          >
            {subtitle}
          </p>

          <p
            className="
              text-xs
              sm:text-sm
              font-bold
              text-gray-800
            "
          >
            {title}
          </p>

        </div>

      </div>

    </motion.div>
  );
}


// =====================================================
// HERO
// =====================================================

export default function Hero() {

  return (

    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-white
        pt-28
        sm:pt-32
        lg:pt-40
        pb-16
      "
    >

      {/* =================================================
          BACKGROUND VIDEO
         ================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-[10]
          pointer-events-none
        "
      >

        <source
          src="/bg1.mp4"
          type="video/mp4"
        />

      </video>


      {/* =================================================
          WHITE + PURPLE GRADIENT
         ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white
          via-white/90
          to-violet-100/80
          pointer-events-none
        "
      />


      {/* =================================================
          PURPLE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-violet-300/30
          blur-[110px]
          pointer-events-none
        "
      />


      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-24
          -right-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-fuchsia-300/25
          blur-[120px]
          pointer-events-none
        "
      />


      {/* =================================================
          CONTENT
         ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-16
            items-center
          "
        >


          {/* =================================================
              LEFT CONTENT
             ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-center
              lg:text-left
            "
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-violet-100
                text-violet-700
                text-xs
                sm:text-sm
                font-semibold
              "
            >

              <Sparkles size={15} />

              #1 Student Project Platform

            </span>


            {/* Heading */}

            <h1
              className="
                mt-5
                sm:mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
                text-gray-900
              "
            >

              Get Your Dream

              <br />

              <span
                className="
                  text-violet-600
                "
              >
                Project Done
              </span>

              <br />

              The Smart Way

            </h1>


            {/* Description */}

            <p
              className="
                mt-5
                sm:mt-6
                max-w-xl
                mx-auto
                lg:mx-0
                text-base
                md:text-lg
                leading-relaxed
                text-gray-500
              "
            >

              We provide custom project development,
              AI solutions, documentation, PPTs and
              complete student project support.

            </p>


            {/* Buttons */}

            <div
              className="
                mt-7
                sm:mt-8
                flex
                flex-col
                sm:flex-row
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
              "
            >

              <Link
                to="/request-project"
                className="w-full sm:w-auto"
              >

                <button
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3.5
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-700
                    text-white
                    font-semibold
                    shadow-lg
                    shadow-violet-500/25
                    transition
                  "
                >
                  Request Project
                </button>

              </Link>


              <Link
                to="/projects"
                className="w-full sm:w-auto"
              >

                <button
                  className="
                    w-full
                    sm:w-auto
                    px-6
                    py-3.5
                    rounded-xl
                    border-2
                    border-violet-100
                    bg-white/70
                    hover:bg-white
                    text-gray-800
                    hover:text-violet-700
                    font-semibold
                    backdrop-blur
                    transition
                  "
                >
                  Browse Projects
                </button>

              </Link>

            </div>


            {/* Trust */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-x-5
                gap-y-2
                text-xs
                sm:text-sm
                text-gray-500
              "
            >

              <span>✓ AI Assistance</span>

              <span>✓ Custom Projects</span>

              <span>✓ Documentation</span>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT 3D TECHNOLOGY ORBIT
             ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              w-full
              h-[390px]
              sm:h-[470px]
              md:h-[520px]
            "
          >


            {/* =================================================
                TECHNOLOGY CARDS
               ================================================= */}

            <TechCard
              icon={Bot}
              title="AI Assistant"
              subtitle="Powered by"
              className="
                left-0
                top-[18%]
                sm:left-[2%]
              "
            />


            <TechCard
              icon={Code2}
              title="Development"
              subtitle="Build with"
              className="
                right-0
                top-[8%]
                sm:right-[4%]
              "
            />


            <TechCard
              icon={FolderKanban}
              title="Projects"
              subtitle="Manage"
              className="
                right-0
                bottom-[20%]
                sm:right-[2%]
              "
            />


            <TechCard
              icon={FileText}
              title="Documentation"
              subtitle="Complete"
              className="
                left-0
                bottom-[14%]
                sm:left-[4%]
              "
            />


            {/* =================================================
                3D CANVAS
               ================================================= */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <Canvas
                camera={{
                  position: [0, 0, 5.5],
                  fov: 45,
                }}
                dpr={[1, 1.5]}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
              >

                <ambientLight intensity={1.5} />

                <directionalLight
                  position={[3, 4, 5]}
                  intensity={2}
                />

                <pointLight
                  position={[-3, -2, 4]}
                  intensity={2}
                  color="#8b5cf6"
                />

                <pointLight
                  position={[3, 1, 3]}
                  intensity={1.5}
                  color="#c084fc"
                />

                <TechOrbit />

              </Canvas>

            </div>


            {/* =================================================
                CENTER AI LABEL
               ================================================= */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                pointer-events-none
              "
            >

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  rounded-full
                  bg-violet-600
                  shadow-[0_0_60px_rgba(124,58,237,0.35)]
                  border-4
                  border-white/60
                "
              >

                <Bot
                  size={30}
                  className="text-white"
                />

                <span
                  className="
                    mt-1
                    text-[10px]
                    sm:text-xs
                    font-bold
                    text-white
                  "
                >
                  AI PROJECT
                </span>

              </div>

            </motion.div>


            {/* =================================================
                MOBILE BOTTOM LABEL
               ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/80
                backdrop-blur-xl
                border
                border-violet-100
                shadow-lg
                whitespace-nowrap
              "
            >

              <Database
                size={15}
                className="text-violet-600"
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-gray-700
                "
              >
                AI • Code • Projects • Docs
              </span>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}