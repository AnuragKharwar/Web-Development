import React from "react";
import VideoCard from "./VideoCard";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction="row"
      display="flex"
      flexWrap="wrap"
      justifycontent="start"
      gap={2}
    >
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
