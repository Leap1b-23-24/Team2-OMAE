"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { useData } from "./Providers/DataProvider";
import { useEffect, useState } from "react";
const step = [1, 2, 3, 4];

export const FeaturedProducts = () => {
  const { allProducts } = useData();
  const [selectedStep, setSelectedStep] = useState(1);
  const [delay, setDelay] = useState(5000);

  const timeoutId = setTimeout(() => {
    if (selectedStep != 4) {
      setSelectedStep(selectedStep + 1);
    } else {
      setSelectedStep(1);
    }
  }, delay);

  return (
    <Container maxWidth="lg">
      <Stack
        gap={"39px"}
        mt={"129px"}
        mb={"71px"}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <Typography fontSize={42} fontWeight={800} color={"#1A0B5B"}>
          Онцлох бүтээгдэхүүн
        </Typography>
        <Stack
          sx={{
            width: "400%",
            position: "relative",
            left: `${150 - (selectedStep - 1) * 100}%`,
            // transition: "1s linear",
          }}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          gap={1}
          px={1}
        >
          <Stack
            sx={{ width: "100%" }}
            position={"relative"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            gap={1}
          >
            {allProducts
              .sort((a, b) => b.productSoldQty - a.productSoldQty)
              .filter((i, top) => top < 16)
              .map((item, index) => (
                <Stack key={index} width={1 / 2}>
                  <FeaturedProductCard
                    productName={item.productName}
                    productImage={item.productImage[0]}
                    productPrice={item.productPrice}
                    timeoutId={timeoutId}
                  />
                </Stack>
              ))}
          </Stack>
        </Stack>
        <Stack flexDirection={"row"} gap={"6px"}>
          {step.map((item, index) => (
            <Stack
              onClick={() => {
                setSelectedStep(item);
              }}
              key={index}
              width={selectedStep == item ? 24 : 16}
              height={4}
              bgcolor={selectedStep == item ? "#FB2E86" : "#FEBAD7"}
              borderRadius={"10px"}
              sx={{ cursor: "pointer", transition: "0.3s linear" }}
            ></Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};