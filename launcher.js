/**
 * Created by shewenbo on 17-4-24.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Reset from './pages/Reset';
import ClinicList from './pages/ClinicList';
import ClinicItem from './pages/ClinicItem';
import Tabs from './pages/TabsPage';
import MyService from './pages/MyService';
import Personal from './pages/Personal';

import AppointmentDoctor from './pages/AppointmentDoctor';

import HouseholdContacts from './pages/HouseholdContacts';
import MyAppointment from './pages/MyAppointment';
import ConditionDescription from './pages/ConditionDescription'
import Payment from './pages/Payment';
import DoctorTime from './pages/DoctorTime';
import TabDoctorDataPage from './pages/TabDoctorDataPage';
import TabDoctorDatePage from './pages/TabDoctorDatePage';
import UpdatePersonInfo from './pages/UpdatePersonInfo';
import AddPersonInfo from './pages/AddPersonInfo';
import PersonInfo from './pages/PersonInfo';
import ClinicAddress from './pages/ClinicAddress';

import {StackNavigator, TabNavigator} from 'react-navigation';


const aierLife = StackNavigator({
    Home: {screen:Login},
    Index:{screen:Tabs},
    Register:{screen:Register},
    Reset:{screen:Reset},
    ClinicList:{screen:ClinicList},
    ClinicItem:{screen:ClinicItem},
    ClinicAddress:{screen:ClinicAddress},
    MyService:{screen:MyService},
    Personal:{screen:Personal},
    AppointmentDoctor:{screen:AppointmentDoctor},
    HouseholdContacts:{screen:HouseholdContacts},
    Payment:{screen:Payment},
    MyAppointment:{screen:MyAppointment},
    DoctorTime:{screen:DoctorTime},
    UpdatePersonInfo:{screen:UpdatePersonInfo},
    AddPersonInfo:{screen:AddPersonInfo},
    PersonInfo:{screen:PersonInfo},
    ConditionDescription:{screen:ConditionDescription}

},);


// MainScreenNavigator.navigationOptions = {
//     title: 'My Chats',
// };


AppRegistry.registerComponent('aierLife', () => aierLife);
