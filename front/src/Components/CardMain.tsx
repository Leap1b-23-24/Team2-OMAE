"use client";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useData } from "./Providers/DataProvider";
type CardMainProps = {
  productImage: string;
  productName: string;
  productColor: string[];
  productPrice: number;
};
export const CardMain = (props: CardMainProps) => {
  const { productImage, productName, productColor, productPrice } = props;
  const { numberFormatter } = useData();
  return (
    <Stack width={1} height={1}>
      <Stack
        position={"relative"}
        width={1}
        sx={{
          aspectRatio: 1 / 1,
          transition: "0.2 linear",
          "&:hover .image": {
            transform: "scale(1.05)",
            transition: "0.2s ease",
          },
          "&:hover .details": {
            opacity: "1",
          },
          ".image": {
            transition: "0.5s ease",
          },
        }}
        overflow={"hidden"}
        bgcolor={"common.white"}
      >
        <Image
          className="image"
          alt="product image"
          style={{ objectFit: "cover" }}
          src={productImage}
          fill
          sizes="small"
        />
        <Stack
          position={"absolute"}
          sx={{ opacity: 0, transition: "0.3s ease" }}
          className="details"
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack gap={1.25} p={"11px"} height={1} justifyContent={"end"}>
            <Stack
              width={30}
              height={30}
              bgcolor={"common.white"}
              color={"#151875"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ShoppingCartOutlined fontSize="inherit" color="inherit" />
            </Stack>
            <Stack
              width={30}
              height={30}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <FavoriteBorder fontSize="inherit" color="inherit" />
            </Stack>
            <Stack
              width={30}
              height={30}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <ZoomIn fontSize="inherit" color="inherit" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          color={"#151875"}
          mt={"18px"}
          fontSize={18}
          fontWeight={700}
        >
          {productName}
        </Typography>
        <Stack flexDirection={"row"} gap={"6px"} mt={1} mb="15px">
          {productColor.map((item, index) => (
            <Stack
              key={index}
              p={"5px"}
              borderRadius={10}
              bgcolor={item}
            ></Stack>
          ))}
        </Stack>
        <Stack flexDirection={"row"} gap={1.25} fontSize={14} fontWeight={400}>
          <Typography color={"#151875"}>
            {numberFormatter.format(productPrice)}
            {"₮"}
          </Typography>
          <Typography color={"#FB2E86"} sx={{ textDecoration: "line-through" }}>
            {numberFormatter.format(productPrice)}
            {"₮"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};