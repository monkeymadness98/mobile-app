import React from 'react';
import Navigation from './navigation';
import { patchWebStorage } from './fixWebStorage';


patchWebStorage(); // Prevent Web IndexedDB errors


export default function App() {
return <Navigation />;
}
