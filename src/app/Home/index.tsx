import { View, Image } from "react-native";
import { Styles } from "./styles";

import { Button } from "@/components/Button";

export default function Home() {
  return (
    <View style={Styles.container}>
      <Image source={require("@/assets/logo.png")} style={Styles.Logo} />
      <Button title="Entrar" />
      <Button title="Sair" />
    </View>
  );
}
