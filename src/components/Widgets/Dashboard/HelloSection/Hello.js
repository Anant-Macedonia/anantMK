// import React, { useEffect } from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Box, Container, Typography } from "@mui/material";

// const Hello = ({ text }) => {
//   const words = text.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const container = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
//     }),
//   };

//   const child = {
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         // delay: 1.25,
//         type: "ease-in",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       y: 20,
//       transition: {
//         type: "ease-in",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <Container>
//       <Box
//         sx={{
//           textAlign: "center",
//           height: "600px",
//         }}>
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { scale: 0.6, opacity: 0 },
//             visible: { scale: 1, opacity: 1, transition: { delay: 0.035 } },
//           }}>
//           <Typography variant="h1">Hello</Typography>
//         </motion.div>
//         <motion.div
//           ref={ref}
//           style={{ fontSize: "2rem" }}
//           variants={container}
//           initial="hidden"
//           animate={controls}>
//           {words.map((word, index) => (
//             <motion.p variants={child} key={index}>
//               {word}
//             </motion.p>
//           ))}
//         </motion.div>
//       </Box>
//     </Container>
//   );
// };

// export default Hello;
