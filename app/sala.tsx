import { ScrollView, Text, View } from 'react-native'
import styles from "../constants/Styles";
import { Link } from 'expo-router';

export default function sala() {
  return (
    <ScrollView style={styles.scrollView}>
			<View style={styles.header}>
				<Text style={styles.headerText}>VIZUALL</Text>
			</View>

			<View style={styles.blocoContainer}>
					<View style={styles.blocoHeader}>
						<Text style={styles.blocoTitle}>Bloco 1 / Sala 1</Text>
					</View>

					
						<View>
							<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo hic eos dolor repellendus rem quia, voluptatum minus alias ad vero, neque quisquam a! Ut vitae itaque ea! Dolores, ipsam?</Text>
						</View>
				</View>

				<View style={styles.blocoContainer}>
					<View style={styles.blocoHeader}>
						<Text style={styles.blocoTitle}>Histórico</Text>
					</View>
					
						<View>
							<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo hic eos dolor repellendus rem quia, voluptatum minus alias ad vero, neque quisquam a! Ut vitae itaque ea! Dolores, ipsam?</Text>
						</View>
				</View>
                <Link href={"/"}>
                    <View style={styles.seta}>
                        <Text style={styles.setaText}>{"<"}</Text>{" "}
                    </View>
                </Link>


		</ScrollView>
  )
}
