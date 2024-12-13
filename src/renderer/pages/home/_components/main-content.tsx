import React, { Suspense } from "react";
import Grid from "@components/common/grid";

import VaultSkeleton from "./vault-skeleton";
import VaultList from "./vault-list";

import MainHeaderSkeleton from "./main-header-skeleton";
import MainHeader from "./main-header";

const generateVaultSkeletons = () => {
  const count = caculateVaultSkeleton();

  return Array.from({ length: count }, (_, index) => (
    <VaultSkeleton key={index} />
  ));
};

const caculateVaultSkeleton = () => {
  const GAP = 40;
  const ITEM_WIDTH = 274

  const total = Math.floor((window.innerWidth + GAP) / (ITEM_WIDTH + GAP));
  return total * 2;
}


const MainContent = () => {
  return (
    <div className="p-8 w-full h-full pt-28">
      <Suspense fallback={<MainHeaderSkeleton />}>
        <MainHeader />
      </Suspense>
      <Grid columns={"default"} gap={10}>
        <Suspense fallback={generateVaultSkeletons()}>
          <VaultList />
        </Suspense>
      </Grid>
    </div>
  );
};

export default MainContent;