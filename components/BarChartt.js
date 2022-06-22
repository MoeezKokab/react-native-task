import { View, Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit'


const BarChartt = () => {
    const data = {
        labels: ["Mon", "tue", "Wed", "Thus", "Fri", "Sat", 'Sun'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 100],

            }

        ]
    };
    const chartConfig = {
        fillShadowGradient: '#00b5ff',
        fillShadowGradientFrom: '#00b5ff',
        fillShadowGradientTo: '#00b5ff',
        fillShadowGradientOpacity: 1,
        backgroundGradientFrom: '#dedede',
        backgroundGradientTo: '#dedede',
        barPercentage: 0.7,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,


        style: {
            borderRadius: 16,
            //fontFamily: 'Bogle-Regular',
        },
        propsForBackgroundLines: {
            strokeWidth: 0,

        },
        propsForLabels: {
            //fontFamily: 'Bogle-Regular',
            colors: "black"
        },
    };
    return (
        <View>

            <BarChart
                data={data}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                //withCustomBarColorFromData={true}
                flatColor={true}
                showValuesOnTopOfBars={true}
                chartConfig={
                    chartConfig
                    // {

                    //     backgroundColor: "#f9f9f9",
                    //     backgroundGradientFrom: "#f9f9f9",
                    //     backgroundGradientTo: "#f9f9f9",
                    //     decimalPlaces: 0, // optional, defaults to 2dp
                    //     color: (opacity = 10) => `#00b5ff`,
                    //     labelColor: (opacity = 0) => `black`,
                    //     barPercentage: 1,
                    //     style: {
                    //         borderRadius: 0
                    //     }

                    // }
                }
                style={{
                    marginVertical: 4,
                    borderRadius: 13
                }} />
        </View>
    )
}

export default BarChartt;