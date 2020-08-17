import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from '../app.routes';

const Tab = createBottomTabNavigator();


const MyTabs: React.FC = () => {
    return <AppRoutes />
    
}

export default MyTabs;