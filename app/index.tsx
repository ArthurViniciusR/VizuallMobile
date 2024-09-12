import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../constants/Styles";
import { Link } from "expo-router";

export default function Index() {

  const numBlocos = 2;
	const salasPorBloco = [2, 2];

  return (
    <ScrollView style={styles.scrollView}>
			<View style={styles.header}>
				<Text style={styles.headerText}>VIZUALL</Text>
			</View>

			{Array.from({ length: numBlocos }, (_, blocoIndex) => (
				<View key={blocoIndex} style={styles.blocoContainer}>
					<View style={styles.blocoHeader}>
						<Text style={styles.blocoTitle}>Bloco {blocoIndex + 1}</Text>
					</View>

					{Array.from({ length: salasPorBloco[blocoIndex] }, (_, salaIndex) => (
						<View key={salaIndex}>
							<TouchableOpacity style={styles.sala}>
								<Text style={styles.salaText}>Sala {salaIndex + 1}</Text>
                <Link href={"/sala"}>
                  <View style={styles.seta}>
                    <Text style={styles.setaText}>{">"}</Text>{" "}
                  </View>
                </Link>
							</TouchableOpacity>
						</View>
					))}
				</View>
			))}
		</ScrollView>
	);
};
