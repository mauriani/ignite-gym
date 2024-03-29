import React, { useState } from "react";
import { SectionList, Heading, VStack, Text } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Costas", "Ombro"],
    },
    {
      title: "6.08.22",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize={"md"}
            mt={10}
            mb={3}
            fontFamily={"heading"}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign={"center"}>
            Não há exercicios registrados hoje.{"\n"}Vamos treinar hoje ?
          </Text>
        )}
      />
    </VStack>
  );
}
