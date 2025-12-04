import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescription] = useState('');
    const [thisbmi, setThisbmi] = useState('');
    console.log("STATE : ", weight, height, bmi, description);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");

        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (isNaN(w) || isNaN(h) || h === 0) {
            setBmi("0");
            setDescription("Invalid input");
            return;
        }

        const thisbmi = w / ((h / 100) ** 2);
        setBmi(thisbmi.toFixed(2));

        let desc = "";
        if (thisbmi < 18.5) {
            desc = "Underweight – eat a bagel!";
        } else if (thisbmi < 25) {
            desc = "Normal – keep it up!";
        } else if (thisbmi < 30) {
            desc = "Overweight – exercise more!";
        } else if (thisbmi < 35) {
            desc = "Obese – get off the couch!";
        } else {
            desc = "Morbidly Obese – take action!";
        }

        setDescription(desc);
    };

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Weight (kg.)</Text>
                <TextInput
                    placeholder="Input your weight"
                    value={weight}
                    keyboardType="numeric"
                    onChangeText={setWeight}
                />
            </View>

            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text>Height (cm.)</Text>
                <TextInput
                    placeholder="Input your height"
                    value={height}
                    keyboardType="numeric"
                    onChangeText={setHeight}
                />
            </View>

            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{
                    backgroundColor: "white",
                    flex: 1,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10
                }}>
                    <Text>{bmi}</Text>
                </View>

                <View style={{
                    backgroundColor: "white",
                    flex: 1,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10
                }}>
                    <Text>{description}</Text>
                </View>
            </View>

            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
