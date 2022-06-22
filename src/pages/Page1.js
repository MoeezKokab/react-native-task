import { View, StyleSheet } from 'react-native'
import Chart from '../../components/Chart'
import Constants from 'expo-constants'
import Gbutton from '../../components/Gbutton';
import List from '../../components/List';





const Page1 = () => {


    return (
        <View style={{ flex: 2 }}>
            <View style={styles.chart}>
                <Chart />
            </View>
            <View style={{ flex: 1 }}>
                <View >

                    <Gbutton style={{ flexDirection: "row", justifyContent: "center" }} b1='Week' b2='Month' b3='Year' />
                </View>
                <List />

            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    chart: {
        flex: 1,
        backgroundColor: "#dedede",
        paddingTop: Constants.statusBarHeight
    }

})

export default Page1


