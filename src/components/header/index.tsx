import { Typography } from "@mui/material";

type TitleHeaderProps = {
  title: string;
};
const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <header className="header">
      <Typography variant="h6">{title}</Typography>
    </header>
  );
};

export default TitleHeader;
