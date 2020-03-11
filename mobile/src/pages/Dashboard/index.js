import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { Container, Title, List } from './styles';

export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useFocusEffect(() => {
        async function loadAppointments() {
            const response = await api.get('appointments');
            setAppointments(response.data);
            setRefreshing(false);
        }
        loadAppointments();
    }, [refreshing]);

    async function handdleCancel(id) {
        const response = await api.delete(`appointments/${id}`);

        setAppointments(
            appointments.map(appointment =>
                appointment.id === id
                    ? {
                          ...appointment,
                          canceled_at: response.data.canceled_at,
                      }
                    : appointment
            )
        );
    }

    function handdleRefresh() {
        setRefreshing(true);
    }

    return (
        <Background>
            <Container>
                <Title>Agendamentos</Title>
                <List
                    data={appointments}
                    keyExtractor={item => String(item.id)}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handdleRefresh} />}
                    renderItem={({ item }) => <Appointment onCancel={() => handdleCancel(item.id)} data={item} />}
                />
            </Container>
        </Background>
    );
}
