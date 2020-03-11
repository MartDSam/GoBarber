import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/NewAppointment/SelectProvider';
import SelectDateTime from './pages/NewAppointment/SelectDateTime';
import Confirm from './pages/NewAppointment/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppointmentStack = createStackNavigator();

export default function Routes() {
    const signed = useSelector(state => state.auth.signed);

    return (
        <NavigationContainer>
            {signed ? (
                <Tab.Navigator
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#fff',
                        inactiveTintColor: 'rgba(255,255,255,0.6)',
                        style: {
                            backgroundColor: '#8d41a8',
                        },
                    }}>
                    <Tab.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{
                            tabBarLabel: 'Agendamentos',
                            tabBarIcon: ({ color }) => {
                                return <Icon name="event" size={20} color={color} />;
                            },
                        }}
                    />
                    <Tab.Screen
                        name="SelectProvider"
                        options={{
                            unmountOnBlur: true,
                            tabBarLabel: 'Agendar',
                            tabBarIcon: ({ color }) => {
                                return <Icon name="add-circle-outline" size={20} color={color} />;
                            },
                        }}>
                        {({ navigation }) => (
                            <AppointmentStack.Navigator
                                initialRouteName="SelectProvider"
                                screenOptions={{
                                    headerTransparent: true,
                                    headerTitleAlign: 'center',
                                    headerTintColor: '#fff',
                                    headerLeftContainerStyle: {
                                        marginLeft: 20,
                                    },
                                }}>
                                <AppointmentStack.Screen
                                    name="SelectProvider"
                                    component={SelectProvider}
                                    options={{
                                        title: 'Selecione o prestador',
                                        headerLeft: () => (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.dispatch(TabActions.jumpTo('Dashboard'));
                                                }}>
                                                <Icon name="chevron-left" size={20} color="#FFF" />
                                            </TouchableOpacity>
                                        ),
                                    }}
                                />
                                <AppointmentStack.Screen
                                    name="SelectDateTime"
                                    component={SelectDateTime}
                                    options={{
                                        title: 'Selecione o horário',
                                        headerLeft: () => (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.dispatch(StackActions.pop(1));
                                                }}>
                                                <Icon name="chevron-left" size={20} color="#FFF" />
                                            </TouchableOpacity>
                                        ),
                                    }}
                                />
                                <AppointmentStack.Screen
                                    name="Confirm"
                                    component={Confirm}
                                    options={{
                                        title: 'Confirmar agendamento',
                                        headerLeft: () => (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.dispatch(StackActions.pop(1));
                                                }}>
                                                <Icon name="chevron-left" size={20} color="#FFF" />
                                            </TouchableOpacity>
                                        ),
                                    }}
                                />
                            </AppointmentStack.Navigator>
                        )}
                    </Tab.Screen>
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarIcon: ({ color }) => {
                                return <Icon name="person" size={20} color={color} />;
                            },
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="SignIn">
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
