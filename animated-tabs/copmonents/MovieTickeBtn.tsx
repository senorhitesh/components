"use client";

import { motion, type Variants } from "motion/react";
import IconTicket4OutlineDuo18 from "@/copmonents/icon/TicketIcon";

const containerVariants: Variants = {
  rest: {},
  hover: {},
  tap: {},
};

const buttonVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
  },

  hover: {
    scale: 1.07,
    rotate: -2,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1,
    },
  },
};

const ticketVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
  },

  hover: {
    scale: 1.07,
    rotate: 5,
    x: 8,
    y: 2,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 14,
      mass: 0.6,
    },
  },
};

const MovieTickeBtn = () => {
  return (
    <motion.div
      className="flex items-center  group cursor-pointer"
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.button
        variants={buttonVariants}
        className="
        cursor-pointer
          relative z-10
          bg-white
          px-5 py-4
          rounded-md
          after:absolute after:right-0 after:top-0 after:h-full after:w-px
          after:bg-[repeating-linear-gradient(to_bottom,#171717_0_10px,transparent_10px_12px)]
          text-neutral-900
          group-hover:after:w-0
          font-medium
          group-hover:border-none
          origin-right overflow-hidden
        "
      >
        <motion.div
          className="
      absolute
      w-full
      h-full
      -translate-x-1/2  left-1/2 
       group-hover:top-0
      top-20
       transition-all duration-50
      bg-purple-500
      blur-xs
      group-hover:scale-105
      z-0  
    "
        />
        <span className="relative z-10 transition-colors duration-120 group-hover:text-white">
          Book Now
        </span>
      </motion.button>

      <motion.div
        variants={ticketVariants}
        className="
          relative
          bg-white
          px-4 py-4.5
          rounded-md
          text-neutral-900
          origin-left
          group
          overflow-hidden
        "
      >
        {" "}
        <motion.div
          className="
      absolute
      w-full
      h-full
      -translate-x-1/2  left-1/2 
       group-hover:top-0
      top-20       blur-xs
       transition-all duration-50
      bg-purple-500
      group-hover:scale-105
      z-0  
    "
        />
        <IconTicket4OutlineDuo18 className="rotate-90 transition group-hover:110  group-hover:text-white" />
      </motion.div>
    </motion.div>
  );
};

export default MovieTickeBtn;
