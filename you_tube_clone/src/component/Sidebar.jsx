import React from "react";

import { Stack } from "@mui/material";
import { categories } from "../component/utils/constants";

const Sidebar = ({ seLectedCategory, setSeLectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setSeLectedCategory(category.name)}
        className="category-btn"
        style={{
          background: category.name === seLectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === seLectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === seLectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default Sidebar;
