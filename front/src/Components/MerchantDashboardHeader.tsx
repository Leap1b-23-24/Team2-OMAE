"use client";

import { NotificationsOutlined, PersonOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useAuth } from "./Providers/AuthProvider";

export const MerchantDashboardHeader = () => {
  const { user } = useAuth();
  return (
    <Stack width={1} bgcolor={"secondary.main"}>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        py={0.5}
        px={3}
      >
        <Image src="/Plogo.svg" alt="pinecone logo" width={32} height={24} />
        <Stack
          flexDirection={"row"}
          gap={2}
          alignItems={"center"}
          color={"common.white"}
          fontSize={"large"}
        >
          <NotificationsOutlined color="inherit" fontSize="inherit" />
          <Stack flexDirection={"row"} alignItems={"center"}>
            <PersonOutline color="inherit" fontSize="inherit" />
            <Typography
              padding={"6px 8px"}
              fontSize={14}
              fontWeight={400}
              color={"common.white"}
            >
              {user.userName.length ? user?.userName : "Username"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
