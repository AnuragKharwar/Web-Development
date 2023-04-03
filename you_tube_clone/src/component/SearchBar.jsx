import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        boder: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 15 },
      }}
    >
      <input
        value={searchTerm}
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <IconButton
        type="submit"
        sx={{ p: "1px", color: "red" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
