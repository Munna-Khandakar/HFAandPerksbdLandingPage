export const containerVariants = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
        y: 20  // Reduced from 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.6,  // Reduced from 2
            delay
        }
    }
})

export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.5,  // Reduced from 2.8
            delay: 0.1     // Reduced from 0.4
        }
    }
}

export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 20  // Reduced from 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.6,  // Reduced from 2.2
        }
    }
}

export const desVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.6,  // Reduced from 2.6
            delay: 0.1     // Reduced from 0.2
        }
    }
}
