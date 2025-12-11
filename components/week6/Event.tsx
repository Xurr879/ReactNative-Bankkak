import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
    const [Upcoming, setUpcoming] = useState([]);
    const loadUpcoming = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setUpcoming(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadUpcoming();
    }, []);
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Upcoming Event!</Text>
            <Text style={{ color: "grey" }}>Mi bombo</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={Upcoming}
                renderItem={
                    ({ item, index }: any) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <View style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 5, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderColor: 'grey' }}>
                                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                    <View style={{ marginTop: -60, height: 70, width: 200, paddingHorizontal: 10, backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, flexDirection: "row" }}>
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 20, color: "red" }}>{item.month}</Text>
                                            <Text style={{ fontSize: 20, color: "grey" }}>{item.date}</Text>
                                        </View>
                                        <View style={{ padding: 1.9 }}>
                                            <Text style={{ fontSize: 15, color: "black" }}>{item.title}</Text>
                                            <Text style={{ fontSize: 10, color: "black" }}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 12, color: "black" }}>{item.place}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={(item: any) => item.id}
            />
        </View>
    );
}
