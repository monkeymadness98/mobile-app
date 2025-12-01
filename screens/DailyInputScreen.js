import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


export let savedEntries = [];


export default function DailyInputScreen() {
const [mood, setMood] = useState(5);
const [energy, setEnergy] = useState(5);
const [stress, setStress] = useState(5);


const saveData = () => {
const entry = {
date: new Date().toISOString().split('T')[0],
mood,
energy,
stress,
};
savedEntries.push(entry);
alert('Saved! Check Weekly Report.');
};


return (
<View style={styles.container}>
<Text style={styles.title}>Daily Check-In</Text>
<Text style={styles.label}>Mood: {mood}</Text>
<Slider minimumValue={1} maximumValue={10} value={mood} onValueChange={setMood} />
<Text style={styles.label}>Energy: {energy}</Text>
<Slider minimumValue={1} maximumValue={10} value={energy} onValueChange={setEnergy} />
<Text style={styles.label}>Stress: {stress}</Text>
<Slider minimumValue={1} maximumValue={10} value={stress} onValueChange={setStress} />
<Button title="Save Today" onPress={saveData} />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 20, justifyContent: 'center' },
title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
label: { marginTop: 20, fontSize: 18 },
});
