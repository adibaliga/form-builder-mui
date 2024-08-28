import React, { useState } from "react";
import { Typography } from "@mui/material";

import IconList from "../../components/list";
import TitleHeader from "../../components/header";
import SearchInput from "../../components/search-input";
import { COMPONENT_ELEMENTS } from "../../constants";
import "./index.css";

const UIElements = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredElements = COMPONENT_ELEMENTS.filter((element) =>
    element.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ui-container">
      <TitleHeader title="Components" />
      <div className="search-bar">
        <SearchInput
          searchInput={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div className="elements-grid">
        {filteredElements.length > 0 ? (
          filteredElements.map((element) => (
            <IconList
              key={element.id}
              icon={element.icon}
              type={element.type}
              id={element.id}
            />
          ))
        ) : (
          <Typography variant="body2">No component found</Typography>
        )}
      </div>
    </div>
  );
};

export default UIElements;
