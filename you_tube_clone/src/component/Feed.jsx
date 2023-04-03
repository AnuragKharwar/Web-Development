import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "../component/index";
import { fetchFromAPI } from "./utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const date = new Date();
  const year = date.getUTCFullYear();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => alert(err));
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        background: "#111",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #fff ",
          color: "white",
          px: 1,
        }}
      >
        <Sidebar
          seLectedCategory={selectedCategory}
          setSeLectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          display="flex"
          variant="body4"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copyright {year} Play media @anurag_kharwar
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "100vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
