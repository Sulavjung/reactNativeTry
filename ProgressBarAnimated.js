import React, { useEffect, useState, useRef } from "react";
import { Animated, Dimensions, useColorScheme } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ProgressChartAnimated = ({ value }) => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    paddingHorizontal: 20,
  };

  const [progressValue, setProgressValue] = useState(0);
  const animationValue = useRef(new Animated.Value(0)).current;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) =>
      `rgba(${255 - progressValue * 255}, ${
        255 * progressValue
      }, 1, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: value, // Value to animate to
      duration: 1000,
      useNativeDriver: true,
    }).start();

    animationValue.addListener(({ value }) => {
      setProgressValue(value);
    });

    return () => {
      animationValue.removeAllListeners();
    };
  }, [value]);

  return (
    <ProgressChart
      data={{ data: [progressValue] }}
      width={Dimensions.get("window").width / 4}
      height={100}
      strokeWidth={12}
      radius={28}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
};

export default ProgressChartAnimated;
