import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDrop, useDrag, DragPreviewImage } from "react-dnd";
import TitleHeader from "../../components/header";
import { COMPONENT_ELEMENTS } from "../../constants";

interface DroppedItem {
  id: number;
  type: string;
  index: number; // Track the index for reordering
}

const DraggableItem = ({
  item,
  index,
  moveItem,
}: {
  item: DroppedItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}) => {
  const [, drag] = useDrag({
    type: "dropped-item",
    item: { ...item, index },
  });

  const [, drop] = useDrop({
    accept: "dropped-item",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div
      ref={(node) => drag(drop(node))}
      className="dropped-item-container"
      style={{
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        cursor: "move",
      }}
    >
      {(() => {
        switch (item.type) {
          case "Checkbox":
            return (
              <TextField
                type="checkbox"
                label={COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            );
          case "Radio Group":
            return (
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedValue}
                  onChange={handleRadioChange}
                  aria-label="radio-group"
                >
                  {[1, 2, 3].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={`Option ${value}`}
                      control={<Radio />}
                      label={`Option ${value}`}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            );
          case "Input":
            return (
              <TextField
                label={COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            );
          case "Header":
            return (
              <Typography
                variant="h6"
                component="h2"
                style={{ marginBottom: "10px" }}
              >
                {COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
              </Typography>
            );
          case "Number Input":
            return (
              <TextField
                type="number"
                label={COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            );
          case "Date Picker":
            return (
              <TextField
                type="date"
                label={COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            );
          case "Dropdown":
            return (
              <TextField
                select
                label={COMPONENT_ELEMENTS.find((el) => el.id === item.id)?.type}
                variant="outlined"
                fullWidth
                margin="normal"
              >
                {/* Add options here */}
              </TextField>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

const EditPreview = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "element",
    drop: (item: DroppedItem) => {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { ...item, index: prevItems.length },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const updatedItems = [...droppedItems];
    const [movedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, movedItem);
    setDroppedItems(updatedItems);
  };

  return (
    <div className="ui-container">
      <TitleHeader title="Edit Preview" />
      <div
        ref={drop}
        style={{
          background: isOver ? "#f0f0f0" : "white",
          height: "calc(100% - 3.5rem)",
          borderRadius: "15px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          border: canDrop ? "2px dashed #000" : "2px dashed #ccc",
          padding: "10px",
          position: "relative",
          overflow: "auto",
        }}
      >
        {droppedItems.map((item, index) => (
          <DraggableItem
            key={item.index}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default EditPreview;
