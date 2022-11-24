import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { btnMargin, primaryBtn } from "./primaryButtonStyle";

const PrimaryButton = ({ btnText, btnClass, link, handleSubmit }) => {
  return (
    <Link href={link} passHref>
      <Button sx={[primaryBtn, btnMargin]} onClick={handleSubmit}>
        {btnText}
        <ButtonIcon />
      </Button>
    </Link>
  );
};

export default PrimaryButton;
