import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const BorderBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode === "light") {
      return "g_start";
    } else {
      return "g_end";
    }
  }
  return (
    <>
      <Box
        border="2px"
        my= {4}
        mx= {4}
        borderRadius="12px"
        px={[3, null, 6]}
        py={[3, null, 6]}
        borderColor={ColorChoose}
        boxShadow="inner"
      >
        {children}
      </Box>
    </>
  );
};

export default BorderBox;