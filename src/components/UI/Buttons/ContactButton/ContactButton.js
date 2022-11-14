import Link from "next/link";
import { Button } from "@mui/material";
import { contactBtn, contactBtnWithoutStyle } from "./contactButtonStyle.js";

const ContactButton = ({ btnText, hamburgerContact }) => {
  return (
    <Link href="/contact" passHref>
      <Button sx={hamburgerContact ? contactBtnWithoutStyle : contactBtn}>
        {btnText}
      </Button>
    </Link>
  );
};

export default ContactButton;
