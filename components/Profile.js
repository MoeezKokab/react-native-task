import { View, Image, StyleSheet } from "react-native"

const Profile = (props) => {
    return (
        <View>
            <Image
                style={[styles.img, props.style]}
                source={require("../photo/elon.webp")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 47,
        height: 47,
        borderRadius: 50,


    },

})

export default Profile;