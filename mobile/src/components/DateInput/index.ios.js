import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateButton, DateText, Picker } from './styles';

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
                <Picker>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        onChange={handdleDate}
                        minimumDate={new Date()}
                        minuteInterval={60}
                        locale="pt"
                        is24Hour
                        display="spinner"
                        mode="date"
                    />
                </Picker>
            )}
        </Container>
    );
}
