import { Box } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import styles from "./buttonIcon.module.css";

const ButtonIcon = () => {
  return (
    <Box component="span" className={styles.iconContainer}>
      <BsArrowRight />
    </Box>
  );
};

export default ButtonIcon;
