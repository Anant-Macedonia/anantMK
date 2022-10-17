import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { serviceStepsButton } from "./serviceStepsButtonStyle";

const ServiceStepsButton = ({ btnText, btnClass, link }) => {
  return (
    <Link href="/" passHref>
      <Button sx={serviceStepsButton}>
        {btnText}
        <ButtonIcon />
      </Button>
    </Link>
  );
};

export default ServiceStepsButton;
