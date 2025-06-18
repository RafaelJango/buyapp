import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";

import { styles } from "./style";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/filterStatus";

type ItemData = {
  status: FilterStatus;
  description: string;
};

type Props = {
  data: ItemData;
  onRemove: () => void;
  onPress: () => void;
};

export function Item({ data, onPress, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
