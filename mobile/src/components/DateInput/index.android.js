import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
    const [opened, setOpened] = useState(false);

    const dateFormatted = useMemo(() => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }), [date]);

    function openDatePicker() {
        setOpened(true);
    }

    function closeDatePicker() {
        setOpened(false);
    }

    function handdleDate(event, selectedDate) {
        closeDatePicker();
        if (selectedDate !== undefined) {
            onChange(selectedDate);
        }
    }

    return (
        <Container>
            <DateButton onPress={openDatePicker}>
                <Icon name="event" color="#fff" size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>

            {opened && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    onChange={handdleDate}
                    minimumDate={new Date()}
                    is24Hour
                    display="spinner"
                    mode="date"
                />
            )}
        </Container>
    );
}
