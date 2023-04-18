export const LinkVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.6 * i,
    },
  }),
  hidden: {
    opacity: 0,
  },
};
