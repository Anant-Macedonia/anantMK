import { Button } from "@mui/material";

const CustomButton = ({ buttonText }) => {
  return (
    <Button variant="contained" color="warning" href="/category/blog">
      {buttonText}
    </Button>
  );
};
export default CustomButton;
