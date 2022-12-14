import React from "react";
import { Stack, Box } from "@mui/material";
import Header from "../../Header";
import Footer from '../../Footer';
import { LayoutProps } from "models";

const MainLayout = (props:LayoutProps) => {
  const { children } = props;
  return (
    <Stack
      minHeight="100vh"
      sx={{
        position: "relative",
      }}
    >
      <Header />
        <Box component="main" sx={{marginTop:20}}>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
