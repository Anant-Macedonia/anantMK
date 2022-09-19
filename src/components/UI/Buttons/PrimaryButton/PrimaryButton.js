import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { primaryBtn } from "./primaryButtonStyle";

const PrimaryButton = ({ btnText, btnClass, link }) => {
  return (
    <Link href="/" passHref>
      <Button sx={primaryBtn}>
        {btnText}
        <ButtonIcon />
      </Button>
    </Link>
  );
};

export default PrimaryButton;
