import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
const Animte = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const getInitialPosition = (desktop, mobile) => (isMobile ? mobile : desktop);
  return (
    <div className="flex gap-7  relative text-white overflow-hidden flex-col justify-center items-center h-screen bg-red-900">

{[ // Star configurations
        { x: 300, y: 0 },
        { x: -300, y: 0 },
        { x: 200, y: -100 },
        { x: 200, y: 100 },
        { x: -200, y: -100 },
        { x: -200, y: 100 },
      ].map((pos, index) => (
        <motion.span
          key={index}
          className="absolute"
          initial={{
            x: getInitialPosition(pos.x, pos.x / 2), // Adjust x for mobile
            y: getInitialPosition(pos.y, pos.y / 2), // Adjust y for mobile
            opacity: 0,
          }}
          animate={{
            opacity: 1, // Animate opacity only once
            rotate: [0, 360], // Infinite rotation
          }}
          transition={{
            opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
            rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
          }}
        >
          <Icon icon="noto:star" />
        </motion.span>
      ))}

      {/* <motion.span
        className="absolute "
        initial={{ x: 300, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span>
      <motion.span
        className="absolute "
        initial={{ x: -300, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span>
      <motion.span
        className="absolute "
        initial={{ y: -100, x: 200, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span>
      <motion.span
        className="absolute "
        initial={{ y: 100, x: 200, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span>
      <motion.span
        className="absolute "
        initial={{ y: -100, x: -200, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span>
      <motion.span
        className="absolute "
        initial={{ y: 100, x: -200, opacity: 0 }}
        animate={{
          opacity: 1, // Animate opacity only once
          rotate: [0, 360], // Infinite rotation
        }}
        transition={{
          opacity: { delay: 5.5, duration: 2 }, // Opacity animation settings
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Rotation animation settings
        }}
      >
        <Icon icon="noto:star" />
      </motion.span> */}



      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 5.5, duration: 2 }}
        className="font-[bimbo] text-5xl"
      >
        Happy New Year From Reyaham
      </motion.div>
      <div className="flex text-3xl font-bold year ">
        <div>2</div>
        <div>0</div>
        <div>2</div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -500 }}
          transition={{ delay: 2, duration: 2 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="balloon"
          ></motion.div>{" "}
          4
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: -18 }}
          transition={{ delay: 3, duration: 2 }}
        >
          5
        </motion.div>
      </div>
    </div>
  );
};

export default Animte;
