import { Box, Flex, keyframes, Tooltip } from "@chakra-ui/react";
import React from "react";

export default function Live() {
  const activeColor = "green.500";
  const ringScaleMin = 0.33;
  const ringScaleMax = 0.66;
  const pulseRing = keyframes`
	0% {
    transform: scale(${ringScaleMin});
  }
	30% {
		transform: scale(${ringScaleMax});
	},
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
    >
      <Tooltip label={`Status: Active`} textTransform='capitalize'>
        <Box
          as='div'
          h='10px'
          w='10px'
          bgColor={activeColor}
          borderRadius='50%'
          _before={{
            content: "''",
            position: "relative",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-100%",
            borderRadius: "50%",
            bgColor: activeColor,
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        />
      </Tooltip>
    </Flex>
  );
}