import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { primaryBtn } from "./primaryButtonStyle";

const PrimaryButton = ({ btnText, btnClass, link, handleSubmit, target }) => {
  return (
    <>
      {target ? (
        <a href={link} target={target}>
          <Button sx={[primaryBtn]} onClick={handleSubmit}>
            {btnText}
            <ButtonIcon />
          </Button>
        </a>
      ) : (
        <Link href={link} passHref>
          <Button sx={[primaryBtn]} onClick={handleSubmit}>
            {btnText}
            <ButtonIcon />
          </Button>
        </Link>
      )}
    </>
  );
};

export default PrimaryButton;
