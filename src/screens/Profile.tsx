import React, { useState } from "react";
import {
  ScrollView,
  VStack,
  Center,
  Skeleton,
  Text,
  Heading,
} from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={"full"}
              startColor={"gray.500"}
              endColor={"gray.400"}
            />
          ) : (
            <UserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/32397288?v=4",
              }}
              alt="Foto usuario"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight={"bold"}
              fontSize={"md"}
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />

          <Heading
            color="gray.200"
            fontSize={"md"}
            mb={2}
            alignSelf={"flex-start"}
            mt={12}
          >
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />

          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />

          <Input
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
