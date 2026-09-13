import { motion } from "framer-motion";

import {
  Globe,
  Smartphone,
  Brain,
  Database,
  ShoppingBag,
  LayoutDashboard,
  Code2,
} from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


// =====================================================
// 3D TECHNOLOGY ORBIT
// =====================================================

function TechnologyOrbit() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.18;

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.04;
  });

  return (
    <group ref={group}>

      {/* Orbit 1 */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[2.15, 0.012, 16, 100]}
        />

        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.35}
        />
      </mesh>


      {/* Orbit 2 */}

      <mesh rotation={[1.15, 0.35, 0]}>
        <torusGeometry
          args={[2.65, 0.009, 16, 100]}
        />

        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.25}
        />
      </mesh>


      {/* Orbit 3 */}

      <mesh rotation={[0.55, 0.8, 0]}>
        <torusGeometry
          args={[3.05, 0.006, 12, 100]}
        />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.2}
        />
      </mesh>


      {/* Central Core */}

      <mesh>
        <icosahedronGeometry
          args={[0.7, 1]}
        />

        <meshStandardMaterial
          color="#7c3aed"
          emissive="#8b5cf6"
          emissiveIntensity={1.5}
          roughness={0.18}
          metalness={0.65}
        />
      </mesh>


      {/* Inner Core */}

      <mesh>
        <sphereGeometry
          args={[0.42, 32, 32]}
        />

        <meshStandardMaterial
          color="#ddd6fe"
          emissive="#c4b5fd"
          emissiveIntensity={1.8}
          roughness={0.15}
          metalness={0.3}
        />
      </mesh>


      {/* Orbit Nodes */}

      <mesh position={[2.15, 0, 0]}>
        <sphereGeometry
          args={[0.1, 20, 20]}
        />

        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={2.5}
        />
      </mesh>


      <mesh position={[-2.15, 0, 0]}>
        <sphereGeometry
          args={[0.09, 20, 20]}
        />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={2.5}
        />
      </mesh>


      <mesh position={[0, 2.15, 0]}>
        <sphereGeometry
          args={[0.08, 20, 20]}
        />

        <meshStandardMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={2.5}
        />
      </mesh>


      <mesh position={[0, -2.15, 0]}>
        <sphereGeometry
          args={[0.08, 20, 20]}
        />

        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={2.5}
        />
      </mesh>


      {/* Particles */}

      <mesh position={[1.5, 1.3, 0]}>
        <sphereGeometry
          args={[0.035, 12, 12]}
        />

        <meshBasicMaterial color="#8b5cf6" />
      </mesh>


      <mesh position={[-1.6, -1.2, 0]}>
        <sphereGeometry
          args={[0.04, 12, 12]}
        />

        <meshBasicMaterial color="#6366f1" />
      </mesh>


      <mesh position={[1.7, -1.2, 0]}>
        <sphereGeometry
          args={[0.035, 12, 12]}
        />

        <meshBasicMaterial color="#a78bfa" />
      </mesh>

    </group>
  );
}


// =====================================================
// FLOATING TECHNOLOGY LABEL
// =====================================================

function TechLabel({
  icon: Icon,
  title,
  className,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 ${className}`}
    >

      <div
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-white
          px-3
          py-2
          sm:px-4
          sm:py-2.5
          border
          border-violet-100
          shadow-[0_10px_30px_rgba(124,58,237,0.10)]
        "
      >

        <div
          className="
            flex
            items-center
            justify-center
            w-7
            h-7
            rounded-lg
            bg-violet-50
          "
        >

          <Icon
            size={15}
            className="text-violet-600"
          />

        </div>


        <span
          className="
            text-[10px]
            sm:text-xs
            font-semibold
            text-gray-700
            whitespace-nowrap
          "
        >
          {title}
        </span>

      </div>

    </motion.div>
  );
}


// =====================================================
// CATEGORIES
// =====================================================

export default function Categories() {

  const categories = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Modern React & Full Stack Projects",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Android & Cross Platform Apps",
    },
    {
      icon: Brain,
      title: "AI Projects",
      desc: "Machine Learning & AI Solutions",
    },
    {
      icon: Database,
      title: "Database Systems",
      desc: "SQL, Firebase & MongoDB",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      desc: "Online Store & Marketplace Apps",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Panels",
      desc: "Analytics & Dashboard Systems",
    },
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
              rgba(124,58,237,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(124,58,237,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />


      {/* =================================================
          PURPLE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, 20, 0],
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
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-violet-300/25
          blur-[100px]
          pointer-events-none
        "
      />


      {/* =================================================
          BLUE GLOW
         ================================================= */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
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
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-blue-300/20
          blur-[110px]
          pointer-events-none
        "
      />


      {/* =================================================
          CENTER GLOW
         ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[40%]
          -translate-x-1/2
          -translate-y-1/2
          w-[280px]
          h-[280px]
          sm:w-[480px]
          sm:h-[480px]
          rounded-full
          bg-violet-300/15
          blur-[90px]
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
            Project Categories
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
            Explore Project Categories
          </h2>


          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Choose from multiple project domains and
            get your custom project developed
            professionally.
          </p>

        </motion.div>


        {/* =================================================
            3D ORBIT
           ================================================= */}

        <div
          className="
            relative
            h-[330px]
            sm:h-[400px]
            md:h-[450px]
            max-w-4xl
            mx-auto
            mt-4
          "
        >

          <div className="absolute inset-0">

            <Canvas
              camera={{
                position: [0, 0, 7],
                fov: 45,
              }}
              dpr={[1, 1.3]}
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

              <TechnologyOrbit />

            </Canvas>

          </div>


          {/* Technology Labels */}

          <TechLabel
            icon={Brain}
            title="AI Projects"
            className="
              left-[1%]
              top-[23%]
              sm:left-[10%]
            "
          />


          <TechLabel
            icon={Code2}
            title="Web Development"
            className="
              right-[1%]
              top-[13%]
              sm:right-[8%]
            "
          />


          <TechLabel
            icon={Database}
            title="Database"
            className="
              left-[2%]
              bottom-[18%]
              sm:left-[10%]
            "
          />


          <TechLabel
            icon={Smartphone}
            title="Mobile Apps"
            className="
              right-[2%]
              bottom-[16%]
              sm:right-[9%]
            "
          />


          {/* Center */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              pointer-events-none
            "
          >

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
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
              "
            >

              <Brain
                size={25}
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

            </motion.div>

          </div>

        </div>


        {/* =================================================
            CATEGORY LIST — NO CARDS
           ================================================= */}

        <div
          className="
            mt-2
            sm:mt-4
            border-y
            border-violet-100
          "
        >

          {categories.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}

                className="
                  group
                  flex
                  items-center
                  gap-4
                  py-5
                  sm:py-6
                  border-b
                  border-violet-100
                  last:border-b-0
                  hover:bg-white/60
                  transition-colors
                  duration-300
                "
              >

                {/* Number */}

                <span
                  className="
                    w-7
                    sm:w-9
                    shrink-0
                    text-xs
                    sm:text-sm
                    font-bold
                    text-violet-300
                  "
                >
                  0{index + 1}
                </span>


                {/* Icon */}

                <div
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    shrink-0
                    rounded-xl
                    bg-violet-50
                    flex
                    items-center
                    justify-center
                    group-hover:bg-violet-100
                    group-hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <Icon
                    size={22}
                    className="text-violet-600"
                  />

                </div>


                {/* Text */}

                <div className="min-w-0 flex-1">

                  <h3
                    className="
                      text-base
                      sm:text-lg
                      font-bold
                      text-gray-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      sm:text-sm
                      text-gray-500
                      truncate
                      sm:whitespace-normal
                    "
                  >
                    {item.desc}
                  </p>

                </div>


                {/* Arrow */}

                <span
                  className="
                    shrink-0
                    text-violet-400
                    text-lg
                    group-hover:translate-x-1
                    group-hover:text-violet-600
                    transition-all
                  "
                >
                  →
                </span>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}