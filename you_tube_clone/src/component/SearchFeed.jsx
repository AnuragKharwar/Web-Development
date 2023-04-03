import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Videos } from "../component/index";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => alert(err));
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflow: "auto", height: "90vh", flex: 2, background: "#111" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for ..
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
