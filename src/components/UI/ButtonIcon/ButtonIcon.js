import { Box } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { iconContainer } from "./buttonIconStyle";

const ButtonIcon = () => {
  return (
    <Box component="span" sx={iconContainer}>
      <BsArrowRight />
    </Box>
  );
};

export default ButtonIcon;
