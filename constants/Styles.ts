import { StyleSheet } from "react-native";

export default StyleSheet.create({
	scrollView: {
		backgroundColor: "#EEF5F8",
		padding: 10,
	},
	header: {
		padding: 30,
		backgroundColor: "#0D1630",
		alignItems: "center",
		borderRadius: 7,
		marginBottom: 20,
        //dropshadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
	},
	headerText: {
		fontSize: 20,
		color: "#ffffff",
		fontWeight: "bold",
	},
	blocoHeader: {
		backgroundColor: "#2E3F47",
		borderRadius: 7,
		marginBottom: 20,
		alignItems: "center",
	},
	blocoTitle: {
		fontSize: 18,
		color: "#ffffff",
		textAlign: "center",
	},
	blocoContainer: {
		marginBottom: 20,
		borderRadius: 7,
		backgroundColor: "#D3E4EB",
		padding: 10,
	},
	sala: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "#242B32",
		borderRadius: 7,
		marginBottom: 10,
        //dropshadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
	},
	salaText: {
		textAlign: "center",
		fontSize: 16,
		color: "#ffffff",
		flex: 1,
	},
	seta: {
		backgroundColor: "#38CCC2",
		borderRadius: 7,
		justifyContent: "center",
		alignItems: "center",
		width: 25,
		height: 25,
	},
	setaText: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "bold",
	},
});