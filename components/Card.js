import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Profile from "./Profile";


const Card = (props) => {
    const [textColor, setTextColor] = useState('green')
    let money = props.t3

    useEffect(() => {

        if (money < 0) {
            console.log(money)
            setTextColor('red')

        }
    }, []
    )


    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <Profile />
                <View style={{ flex: 1 }}>

                    <Text style={{ fontWeight: "bold", marginLeft: 5 }}>{props.t1}</Text>

                    <View style={{ justifyContent: 'space-between' }}>

                        <Text style={{ alignSelf: 'flex-end', color: textColor }}>${props.t3}</Text>
                    </View>
                    <Text style={{ marginLeft: 5 }}>{props.t2}</Text>


                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 4,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.52,

        elevation: 3,
    }
})
export default Card