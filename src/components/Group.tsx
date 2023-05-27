import { Text, Pressable, IPressableProps } from "native-base";

type Props = IPressableProps & {
  name: string;
};

export function Group({ name, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded={"md"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"} // nao deixa nada sair do botao
      {...rest}
    >
      <Text
        color={"gray.200"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight={"bold"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
