import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
    return (
        <ScrollView style={{ margin: 20 }} >
            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />

            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}
                color="#665544"
            />


            <Text> Hello World </Text>

            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />

             <View style={{ flexDirection: 'row' , justifyContent : 'space-between' , marginTop : 50}}>
        <Image style={{ width: 100, height: 50 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Image style={{ width: 100, height: 100}} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Image style={{ width: 100, height: 100, borderRadius: 100/2 }} source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View> 


        </ScrollView>
    );
}
