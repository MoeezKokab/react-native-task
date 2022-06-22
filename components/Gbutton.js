import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
import { useState } from 'react';
const Gbutton = (props) => {
    const [button1, setButton1] = useState("contained")
    const [button2, setButton2] = useState("elevated")
    const [button3, setButton3] = useState("elevated")
    const PressButtonChange = (inp) => {
        if (inp === 'b1') {
            setButton1("contained")
            setButton2("elevated")
            setButton3("elevated")
        }
        else if (inp === 'b2') {
            setButton1("elevated")
            setButton2("contained")
            setButton3("elevated")
        }
        else if (inp === 'b3') {
            setButton1("elevated")
            setButton2("elevated")
            setButton3("contained")
        }


    }
    return (
        <View style={[props.style]}>
            <Button mode={button1} color="#2d2d2d"
                contentStyle={{ height: 44 }} onPress={() => { PressButtonChange("b1") }}>
                {props.b1}
            </Button>
            <Button mode={button2} color="#2d2d2d" onPress={() => { PressButtonChange("b2") }}>
               {props.b2}
            </Button><Button mode={button3} color="#2d2d2d" onPress={() => { PressButtonChange("b3") }}>
            {props.b3}
            </Button>

        </View>
    )
}

export default Gbutton