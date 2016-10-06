import React, { Component } from 'react';
import LevelListEntry from '../components/LevelListEntry.jsx';

var nums = [
  {level: 1, time: '00:00'},
  {level: 2, time: '00:00'},
  {level: 3, time: '00:00'},
  {level: 4, time: '00:00'},
  {level: 5, time: '00:00'},
  {level: 6, time: '00:00'},
  {level: 7, time: '00:00'}

]

const LevelList = (props) => (
  <LevelListEntry nums={nums}/>
)

export default LevelList;
