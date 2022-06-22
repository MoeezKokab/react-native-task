import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants'
import Svg, { Path } from "react-native-svg"
import { Entypo } from '@expo/vector-icons'
import Profile from '../../components/Profile'
import { useNavigation } from '@react-navigation/native';




const Page2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.homeView}>
            <View >
                <TouchableOpacity onPress={() => { navigation.navigate('page1') }}>
                    <Svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <Path d="M0.341278 7.7989L7.78827 0.351909C7.89582 0.241468 8.02425 0.15348 8.16608 0.0930737C8.30791 0.0326676 8.46032 0.00104716 8.61447 2.55715e-05C8.76863 -0.000996022 8.92144 0.0286017 9.06406 0.0871227C9.20667 0.145644 9.33625 0.231917 9.44525 0.340922C9.55426 0.449928 9.64053 0.5795 9.69905 0.722117C9.75757 0.864734 9.78718 1.01755 9.78616 1.1717C9.78514 1.32586 9.75351 1.47827 9.6931 1.6201C9.63269 1.76193 9.54472 1.89035 9.43428 1.9979L3.97328 7.4589H23.8633C24.0189 7.45434 24.1739 7.48105 24.3191 7.53747C24.4642 7.59389 24.5966 7.67886 24.7083 7.78735C24.82 7.89584 24.9088 8.02566 24.9695 8.16909C25.0301 8.31253 25.0614 8.46667 25.0614 8.6224C25.0614 8.77813 25.0301 8.93227 24.9695 9.07571C24.9088 9.21914 24.82 9.34896 24.7083 9.45745C24.5966 9.56595 24.4642 9.65091 24.3191 9.70733C24.1739 9.76375 24.0189 9.79046 23.8633 9.7859H3.97328L9.43428 15.2469C9.54472 15.3544 9.63269 15.4829 9.6931 15.6247C9.75351 15.7665 9.78514 15.9189 9.78616 16.0731C9.78718 16.2273 9.75757 16.3801 9.69905 16.5227C9.64053 16.6653 9.55426 16.7949 9.44525 16.9039C9.33625 17.0129 9.20667 17.0992 9.06406 17.1577C8.92144 17.2162 8.76863 17.2458 8.61447 17.2448C8.46032 17.2438 8.30791 17.2121 8.16608 17.1517C8.02425 17.0913 7.89582 17.0033 7.78827 16.8929L0.341278 9.4459C0.233093 9.33788 0.147258 9.2096 0.0886993 9.06839C0.0301408 8.92717 0 8.77578 0 8.6229C0 8.47003 0.0301408 8.31864 0.0886993 8.17742C0.147258 8.03621 0.233093 7.90792 0.341278 7.79991V7.7989Z" fill="#303030" />
                    </Svg>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.chatIcon}>
                    <Entypo name="chat" size={34} color="black" />
                </View>
            </View>
            <View style={styles.dpView} >
                <Profile style={{
                    width: 70,
                    height: 70,
                }} />
                <Profile style={{
                    width: 70,
                    height: 70,
                    marginLeft: -15
                }} />

            </View>
            <View style={{ flex: 4, marginTop: -555, }}>

                <LinearGradient
                    // Button Linear Gradient
                    colors={['#00B5FF', '#00DBFF',]}
                    style={styles.blueCard}>

                    <View style={{ alignItems: "center", padding: 25 }}>
                        <Text style={{ fontSize: 16 }}>Transaction</Text>
                        <Text style={{ fontSize: 36 }}>$5000</Text>
                        <Text style={{ fontSize: 16 }}>You have received $5000 from</Text>
                        <Text style={{ fontSize: 16 }}> Moeez's 30 min call</Text>
                    </View>

                </LinearGradient>
                <View style={styles.geryBox}>
                    <View style={{ margin: 15, padding: 10, }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Transaction Detail</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                            <Text>SubTotal</Text>
                            <Text>$200.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "99%", marginTop: 5 }}>
                            <Text>Donation</Text>
                            <Text>-$20.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "99%", marginTop: 5 }}>
                            <Text>careers path fees</Text>
                            <Text>-$20.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "99%", marginTop: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Earning</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$160.0</Text>
                        </View>
                    </View>

                </View>
            </View>


        </View>
    )

}


const styles = StyleSheet.create({

    homeView: {
        paddingTop: Constants.statusBarHeight,
        flex: 6
    }
    ,

    chatIcon: {
        justifyContent: "flex-end",
        flex: 1,
        flexDirection: "row",
        marginRight: 7
    }
    ,
    dpView: {
        marginTop: -90,
        flex: 5,
        flexDirection: 'row',
        justifyContent: "center"
    },
    blueCard: {
        alignSelf: "center",
        height: "25%",
        width: "85%",
        // backgroundCo

        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',

    },
    geryBox: {
        width: '85%',
        height: "35%",
        backgroundColor: "#dedede"
        , alignSelf: 'center',
        marginTop: 45
    }

})


export default Page2