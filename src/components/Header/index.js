import React from 'react';
import {Text} from 'react-native';

const days = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export default function Header() {
  const date = new Date();
  return (
    <>
      <Text>{`${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </>
  );
}
