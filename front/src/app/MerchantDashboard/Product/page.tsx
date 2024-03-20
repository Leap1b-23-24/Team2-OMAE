"use client";
import { AddProducts } from "@/Components/AddProducts";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboardLeft";
import { ProductList } from "@/Components/ProductList";
import { useData } from "@/Components/Providers/DataProvider";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function Product() {
  const { add, setAdd } = useData();
  const [editId, setEditId] = useState("");
  return (
    <Stack bgcolor={"#F7F7F8"}>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack width={1} height={1}>
          {!add && <ProductList setEditId={setEditId} />}
          {add && <AddProducts editId={editId} />}
        </Stack>
      </Stack>
    </Stack>
  );
}
