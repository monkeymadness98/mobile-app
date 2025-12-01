import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { savedEntries } from './DailyInputScreen';


export default function WeeklyReportScreen() {
if (!savedEntries || savedEntries.length === 0) {
return (
<View style={styles.container}>
<Text style={styles.title}>No data yet</Text>
</View>
);
}


const average = (key) => {
const total = savedEntries.reduce((sum, e) => sum + e[key], 0);
return (total / savedEntries.length).toFixed(1);
};


return (
<View style={styles.container}>
<Text style={styles.title}>Weekly Report</Text>
<Text style={styles.row}>Average Mood: {average('mood')}</Text>
<Text style={styles.row}>Average Energy: {average('energy')}</Text>
<Text style={styles.row}>Average Stress: {average('stress')}</Text>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', padding: 20 },
title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
row: { fontSize: 18, marginTop: 10 },
});
