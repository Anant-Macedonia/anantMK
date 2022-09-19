import Link from "next/link";
import { Button } from "@mui/material";
import styles from "./contactButton.module.css";

const PrimaryButton = ({ btnText, link }) => {
  return (
    <Link href="/contact" passHref>
      <Button className={styles.contactBtn}>{btnText}</Button>
    </Link>
  );
};

export default PrimaryButton;
