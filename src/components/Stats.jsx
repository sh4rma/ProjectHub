import { motion } from "framer-motion";
import statsData from "../data/stats";
import useFakeStats from "../hooks/useFakeStats";

import {
  Users,
  Trophy,
  Brain,
  Code2,
  FolderKanban,
  Database,
} from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


// =====================================================
// 3D TECHNOLOGY ORBIT
// =====================================================

function StatsOrbit() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.16;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
  });

  return (
    <group ref={group}>

      {/* Outer Orbit */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.012, 16, 100]} />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>


      {/* Second Orbit */}

      <mesh rotation={[1.1, 0.4, 0]}>
        <torusGeometry args={[2.7, 0.009, 16, 100]} />

        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.25}
        />
      </mesh>


      {/* Third Orbit */}

      <mesh rotation={[0.6, 0.8, 0]}>
        <torusGeometry args={[3.1, 0.006, 12, 100]} />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.18}
        />
      </mesh>


      {/* Central Core */}

      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />

        <meshStandardMaterial
          color="#7c3aed"
          emissive="#8b5cf6"
          emissiveIntensity={1.7}
          roughness={0.18}
          metalness={0.65}
        />
      </mesh>


      {/* Inner Core */}

      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />

        <meshStandardMaterial
          color="#ede9fe"
          emissive="#c4b5fd"
          emissiveIntensity={1.5}
          roughness={0.15}
          metalness={0.25}
        />
      </mesh>


      {/* Orbit Nodes */}

      <mesh position={[2.2, 0, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />

        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={3}
        />
      </mesh>


      <mesh position={[-2.2, 0, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={3}
        />
      </mesh>


      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.08, 20, 20]} />

        <meshStandardMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={3}
        />
      </mesh>


      <mesh position={[0, -2.2, 0]}>
        <sphereGeometry args={[0.08, 20, 20]} />

        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={3}
        />
      </mesh>

    </group>
  );
}


// =====================================================
// STAT NUMBER
// =====================================================

function StatNumber({ value, suffix }) {
  const count = useFakeStats(value);

  return (
    <h3
      className="
        mt-4
        text-3xl
        sm:text-4xl
        font-black
        text-gray-900
      "
    >
      {count}
      <span className="text-violet-600">
        {suffix}
      </span>
    </h3>
  );
}


// =====================================================
// STATS
// =====================================================

export default function Stats() {

  const icons = [
    Users,
    Trophy,
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
        bg-gradient-to-br
        from-[#F8F5FF]
        via-white
        to-[#F1EEFF]
      "
    >

      {/* =================================================
          GRID BACKGROUND
         ================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(124,58,237,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(124,58,237,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />


      {/* =================================================
          PURPLE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-violet-300/25
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =================================================
          BLUE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-blue-300/15
          blur-[110px]
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

        {/* =================================================
            HEADING
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-violet-100
              text-violet-600
              text-xs
              sm:text-sm
              font-semibold
              shadow-sm
            "
          >

            <Brain size={15} />

            ProjectHub Community

          </span>


          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              text-gray-900
              tracking-tight
            "
          >
            Trusted By Students
          </h2>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              max-w-xl
              mx-auto
            "
          >
            Helping students build amazing projects
            with modern technology.
          </p>

        </motion.div>


        {/* =================================================
            3D AREA
           ================================================= */}

        <div
          className="
            relative
            h-[320px]
            sm:h-[390px]
            md:h-[430px]
            max-w-4xl
            mx-auto
          "
        >

          {/* 3D Canvas */}

          <div className="absolute inset-0">

            <Canvas
              camera={{
                position: [0, 0, 7],
                fov: 45,
              }}
              dpr={[1, 1.25]}
              gl={{
                antialias: false,
                alpha: true,
                powerPreference: "high-performance",
              }}
            >

              <ambientLight intensity={1.8} />

              <directionalLight
                position={[3, 4, 5]}
                intensity={1.5}
                color="#a78bfa"
              />

              <pointLight
                position={[-3, -2, 4]}
                intensity={1.5}
                color="#6366f1"
              />

              <StatsOrbit />

            </Canvas>

          </div>


          {/* =================================================
              FLOATING TECH LABELS
             ================================================= */}

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[2%]
              sm:left-[12%]
              top-[25%]
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-violet-100
                rounded-xl
                px-3
                py-2
                shadow-[0_10px_30px_rgba(124,58,237,0.10)]
              "
            >

              <Code2
                size={16}
                className="text-violet-600"
              />

              <span className="text-xs font-semibold text-gray-700">
                Development
              </span>

            </div>

          </motion.div>


          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              right-[2%]
              sm:right-[12%]
              top-[16%]
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-violet-100
                rounded-xl
                px-3
                py-2
                shadow-[0_10px_30px_rgba(124,58,237,0.10)]
              "
            >

              <Database
                size={16}
                className="text-violet-600"
              />

              <span className="text-xs font-semibold text-gray-700">
                Technology
              </span>

            </div>

          </motion.div>


          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[4%]
              sm:left-[14%]
              bottom-[18%]
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-violet-100
                rounded-xl
                px-3
                py-2
                shadow-[0_10px_30px_rgba(124,58,237,0.10)]
              "
            >

              <FolderKanban
                size={16}
                className="text-violet-600"
              />

              <span className="text-xs font-semibold text-gray-700">
                Projects
              </span>

            </div>

          </motion.div>


          {/* Center Badge */}

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
                w-20
                h-20
                sm:w-24
                sm:h-24
                rounded-full
                bg-white/90
                backdrop-blur
                border
                border-violet-100
                shadow-[0_15px_50px_rgba(124,58,237,0.15)]
                flex
                flex-col
                items-center
                justify-center
              "
            >

              <Brain
                size={24}
                className="text-violet-600"
              />

              <span
                className="
                  mt-1
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  text-gray-800
                "
              >
                PROJECT HUB
              </span>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            STAT CARDS
           ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-5
            max-w-3xl
            mx-auto
          "
        >

          {statsData.map((item, index) => {

            const Icon =
              icons[index % icons.length];

            return (

              <motion.div
                key={item.id}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -6,
                }}

                className="
                  group
                  bg-white
                  rounded-2xl
                  p-5
                  sm:p-6
                  border
                  border-violet-100
                  shadow-sm
                  hover:shadow-lg
                  hover:border-violet-200
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-violet-50
                    flex
                    items-center
                    justify-center
                    group-hover:bg-violet-100
                    transition
                  "
                >

                  <Icon
                    size={23}
                    className="text-violet-600"
                  />

                </div>


                <StatNumber
                  value={item.value}
                  suffix={item.suffix}
                />


                <h4
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    font-semibold
                    text-gray-700
                  "
                >
                  {item.title}
                </h4>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}