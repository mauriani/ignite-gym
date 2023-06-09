import React from "react";
import { Center, Text, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <Group name="costas" />
    </VStack>
  );
}
