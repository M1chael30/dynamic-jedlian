export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between boxes
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: -120, // a bit higher = smoother fall
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220, // softer fall
      damping: 100, // allows gentle bounce
      mass: 0.8,
    },
  },
};

export const missionVisionVariants = {
  hidden: {
    opacity: 0,
    y: 120, // a bit higher = smoother fall
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const corporateValuesVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
    y: -120, // a bit higher = smoother fall
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220, // softer fall
      damping: 100, // allows gentle bounce
      mass: 0.8,
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    x: -120, // start from left
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40, // softer spring → smoother
      damping: 20, // allows gentle easing
      mass: 0.9, // heavier mass → slower, smooth motion
    },
  },
  exit: {
    opacity: 0,
    x: 80, // exit slightly to right
    transition: {
      type: "tween", // smoother exit than default spring
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeRightSlowVariants = {
  hidden: {
    opacity: 0,
    x: 20, // start from right → move left
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    x: -80, // exit to left
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};


export const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 120, // start from right → move left
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    x: -80, // exit to left
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -120, // start from right → move left
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    x: 80, // exit to left
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};
