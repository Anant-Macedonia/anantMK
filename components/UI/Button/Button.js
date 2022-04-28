import { Button } from "@mui/material";

const CustomButton = ({ buttonText }) => {
  return (
    <Button variant="contained" color="warning" href="/blog">
      {buttonText}
    </Button>
  );
};

const ClickButton = ({ buttonText }) => {
  return (
    <Button variant="contained" color="warning">
      {buttonText}
    </Button>
  );
};

export { CustomButton, ClickButton };
