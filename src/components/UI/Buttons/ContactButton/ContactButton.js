import Link from "next/link";
import { Button } from "@mui/material";
import { contactBtn } from "./contactButtonStyle.js";

const ContactButton = ({ btnText, link }) => {
  return (
    <>
      {btnText && (
        <Link href="/contact" passHref>
          <Button sx={contactBtn}>{btnText}</Button>
        </Link>
      )}
    </>
  );
};

export default ContactButton;
