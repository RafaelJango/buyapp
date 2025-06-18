import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "./styles";

import { Button } from "@/components/Button";

import { Input } from "@/components/Input";

import { Item } from "@/components/Item";

import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/filterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "Comprar Manga" },
  { id: "2", status: FilterStatus.PENDING, description: "Comprar Café" },
  { id: "3", status: FilterStatus.PENDING, description: "Comprar Arroz" },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="Oque você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onPress={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
