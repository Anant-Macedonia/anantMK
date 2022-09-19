import Link from "next/link";
import { Button } from "@mui/material";
import { contactBtn } from "./contactButtonStyle";

const PrimaryButton = ({ btnText, link }) => {
  return (
    <Link href="/contact" passHref>
      <Button sx={contactBtn}>{btnText}</Button>
    </Link>
  );
};

export default PrimaryButton;
