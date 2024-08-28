import { Typography } from "@mui/material";
import { useDrag } from "react-dnd";

interface ListProps {
  icon: JSX.Element;
  type: string;
  id: number;
}
const IconList = ({ id, icon, type }: ListProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "element",
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="element-box"
      style={{ borderColor: isDragging ? "pink" : "#ccc" }}
    >
      <div className="icon">{icon}</div>
      <Typography variant="body2" className="text">
        {type}
      </Typography>
    </div>
  );
};

export default IconList;
