import { View, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

export default function Login() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<View>
			<Text
				style={{
					textAlign: "center",
					fontSize: 40,
					fontWeight: "bold",
				}}
			>
				About
			</Text>
			<TouchableOpacity onPress={handleClick}>
				<Text>Go back to home</Text>
			</TouchableOpacity>
		</View>
	);
}