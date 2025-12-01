import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<Image
style={styles.logo}
source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' }}
/>
<Text style={styles.title}>LifeScore Tracker</Text>
<Button title="Daily Input" onPress={() => navigation.navigate('DailyInput')} />
<Button title="Weekly Report" onPress={() => navigation.navigate('WeeklyReport')} />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
logo: { width: 120, height: 120, marginBottom: 20 },
title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
});
