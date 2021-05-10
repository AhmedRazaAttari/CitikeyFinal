import React, { useEffect, Component, PureComponent } from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';

// import stripe from 'tipsi-stripe';

export default class CardFormScreen extends PureComponent {
    static title = 'Card Form'

    state = {
        loading: false,
        token: null,
        success: null
    }

    doPayment = async () => {
        // Use firebase serve for local testing if you don't have a paid firebase account
        // fetch('http://localhost:5000/shoppr-c97a7/us-central1/payWithStripe', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         amount: 100,
        //         currency: "usd",
        //         token: this.state.token.tokenId
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //         this.setState({
        //             success: responseJson.status == 'succeeded' ? true : false,
        //             response: responseJson
        //         })
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });;
    }

    handleCardPayPress = async () => {
        // try {
        //     this.setState({ loading: true, token: null })
        //     const token = await stripe.paymentRequestWithCardForm({
        //         // Only iOS support this options
        //         smsAutofillDisabled: true,
        //         requiredBillingAddressFields: 'full',
        //         prefilledInformation: {
        //             billingAddress: {
        //                 name: 'Enappd Store',
        //                 line1: 'Canary Place',
        //                 line2: '3',
        //                 city: 'Macon',
        //                 state: '',
        //                 country: 'Estonia',
        //                 postalCode: '31217',
        //                 email: 'admin@enappd.com',
        //             },
        //         },
        //     })
        //     console.log(token);

        //     this.setState({ loading: false, token })
        // } catch (error) {
        //     this.setState({ loading: false })
        // }
    }

    render() {
        const { loading, token, success, response } = this.state


        return (

            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
                    <Text style={{ color: "white", fontSize: 17 }}>ADD CARD</Text>
                    <Text style={{ color: "white", fontSize: 13 }}></Text>
                </View>
                <View style={{ alignItems: "center", padding: 10 }}>
                    <View style={{ width: Dimensions.get("screen").width - 40, height: 195, backgroundColor: "white", marginTop: 20, borderRadius: 15, flexDirection: "column" }}>
                        <View style={{ width: "100%", height: 13, backgroundColor: "#CC272A", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}></View>
                        <View style={{ padding: 15, flexDirection: "column" }}>
                            <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45 }}>CARD HOLDER</Text>
                            <Text style={{ fontSize: 14, color: "#6C6C6C" }}>Mike Holder</Text>

                            <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD NUMBER</Text>
                            <Text style={{ fontSize: 14, color: "#6C6C6C" }}>0314 5678 8908 9000</Text>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD EXPIRE</Text>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C" }}>09/22</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CVV</Text>
                                    <Text style={{ fontSize: 14, color: "#6C6C6C" }}>***</Text>
                                </View>
                                <Image source={require("../assets/mastercard.png")} />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
                        <View>
                            <Text>Card Number</Text>
                            <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="0315 5678 8908 9000" />
                                <Image source={require("../assets/mastercard.png")} />
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text>Name on Card</Text>
                            <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="Mike Holder" />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginTop: 15 }}>
                                <Text>Expire Date</Text>
                                <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                    <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="09/22" />
                                </View>
                            </View>


                            <View style={{ marginTop: 15, marginLeft: 20 }}>
                                <Text>CVV</Text>
                                <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                    <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="***" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
                        <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 40, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>ADD CARD</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
        //     <View style={styles.container}>
        //         <Image
        //             style={{ width: 50, height: 50 }}
        //             source={{ uri: 'https://enappd.com/static/images/enappd-logo-blue.png' }}
        //         />
        //         <View style={styles.containerTitle}>
        //             <Text style={styles.title}>
        //                 Stripe Payment in React Native
        //   </Text>
        //             <Text style={styles.subtitle}>
        //                 by Enappd
        //   </Text>
        //         </View>
        //         <Text style={styles.header}>
        //             Card Form Example
        //   </Text>
        //         <Text style={styles.instruction}>
        //             Click button to show Card Form dialog.
        //   </Text>
        //         <Button
        //             text="Enter you card and pay"
        //             loading={loading}
        //             onPress={this.handleCardPayPress}
        //         />
        //         <View
        //             style={styles.token}
        //         >
        //             {token &&
        //                 <>
        //                     <Text style={styles.instruction}>
        //                         Token: {token.tokenId}
        //                     </Text>
        //                     <Button
        //                         text="Make Payment"
        //                         loading={loading}
        //                         onPress={this.doPayment}
        //                     />

        //                 </>
        //             }
        //             {success &&
        //                 <>
        //                     <Text style={styles.instruction}>
        //                         Status: {response.status}
        //                     </Text>
        //                     <Text style={styles.instruction}>
        //                         ID: {response.id}
        //                     </Text>
        //                     <Text style={styles.instruction}>
        //                         Amount: {response.amount}
        //                     </Text>
        //                 </>
        //             }
        //         </View>
        //     </View>
        // )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    token: {
        height: 20,
    },
})
// export default ({ navigation }) => {

//     return (
    //     <View style={{ flex: 1 }}>
    //         <View style={{ backgroundColor: "#CC272A", height: 56, width: Dimensions.get("screen").width, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
    //             <Ionicons name="arrow-back-outline" size={35} color="white" onPress={() => navigation.goBack()} />
    //             <Text style={{ color: "white", fontSize: 17 }}>ADD CARD</Text>
    //             <Text style={{ color: "white", fontSize: 13 }}></Text>
    //         </View>
    //         <View style={{ alignItems: "center", padding: 10 }}>
    //             <View style={{ width: Dimensions.get("screen").width - 40, height: 195, backgroundColor: "white", marginTop: 20, borderRadius: 15, flexDirection: "column" }}>
    //                 <View style={{ width: "100%", height: 13, backgroundColor: "#CC272A", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}></View>
    //                 <View style={{ padding: 15, flexDirection: "column" }}>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45 }}>CARD HOLDER</Text>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C" }}>Mike Holder</Text>

    //                     <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD NUMBER</Text>
    //                     <Text style={{ fontSize: 14, color: "#6C6C6C" }}>0314 5678 8908 9000</Text>

    //                     <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
    //                         <View>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CARD EXPIRE</Text>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C" }}>09/22</Text>
    //                         </View>
    //                         <View>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C", opacity: .45, marginTop: 15 }}>CVV</Text>
    //                             <Text style={{ fontSize: 14, color: "#6C6C6C" }}>***</Text>
    //                         </View>
    //                         <Image source={require("../assets/mastercard.png")} />
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
    //                 <View>
    //                     <Text>Card Number</Text>
    //                     <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                         <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="0315 5678 8908 9000" />
    //                         <Image source={require("../assets/mastercard.png")} />
    //                     </View>
    //                 </View>
    //                 <View style={{ marginTop: 15 }}>
    //                     <Text>Name on Card</Text>
    //                     <View style={{ height: 48, width: Dimensions.get("screen").width - 40, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                         <TextInput style={{ height: 48, width: "83%", paddingLeft: 20 }} placeholder="Mike Holder" />
    //                     </View>
    //                 </View>

    //                 <View style={{flexDirection : "row"}}>
    //                     <View style={{ marginTop: 15 }}>
    //                         <Text>Expire Date</Text>
    //                         <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                             <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="09/22" />
    //                         </View>
    //                     </View>


    //                     <View style={{ marginTop: 15, marginLeft : 20 }}>
    //                         <Text>CVV</Text>
    //                         <View style={{ height: 48, borderRadius: 40, borderColor: "#C2BDBD", borderWidth: 1, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
    //                             <TextInput style={{ height: 48, width: "40%", paddingLeft: 20 }} placeholder="***" />
    //                         </View>
    //                     </View>
    //                 </View>
    //             </View>
    //             <TouchableOpacity onPress={() => navigation.navigate("ThirdStep")} style={{ alignSelf: "center" }}>
    //                 <LinearGradient colors={['#180FC3', '#781D76', '#D22A2D']} start={{ x: 0, y: 0.9 }} end={{ x: 0, y: 0 }} style={{ opacity: .9, width: Dimensions.get("screen").width - 40, height: 50, borderRadius: 50, borderWidth: 1, borderColor: "lightgrey", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
    //                     <Text style={{ fontFamily: "Roboto", color: "white", fontSize: 14 }}>ADD CARD</Text>
    //                 </LinearGradient>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // )
// } 