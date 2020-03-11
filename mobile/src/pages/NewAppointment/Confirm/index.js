import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import Background from '~/components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
    const { time, provider } = route.params;

    const dateFormatted = useMemo(
        () =>
            formatRelative(parseISO(time), new Date(), {
                locale: pt,
            }),
        [time]
    );

    async function handdleAddAppointment() {
        await api.post('appointments', {
            provider_id: provider.id,
            date: time,
        });

        navigation.jumpTo('Dashboard');
    }

    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                    }}
                />
                <Name>{provider.name}</Name>
                <Time>{dateFormatted}</Time>
                <SubmitButton onPress={handdleAddAppointment}>Confirmar agendamento</SubmitButton>
            </Container>
        </Background>
    );
}
