import React, {useState} from 'react';
import {useSelector} from 'react-redux';

let mode = 'sad';

export default COLORS =
  mode == 'LIGHT'
    ? {
        PRIMARY_BG: '#fff',
        SECONDARY_BG: '#EEEEEE',
        LIGHTGREY: '#F5F5F5',
        WHITE: '#fff',
        BLACK: '#000',
        RED: '#FF4343',
        GREEN: '#19D276',
        ORANGE: '#F58026',
        ORANGELIGHT: '#F5B826',
        TEXTGREY: '#929497',
        BLACKWHITE: '#000',
      }
    : {
        PRIMARY_BG: '#1F1D2B',
        SECONDARY_BG: '#2B2E3D',
        LIGHTGREY: '#2B2E3D',
        WHITE: '#fff',
        BLACK: '#000',
        RED: 'green',
        GREEN: '#19D276',
        ORANGE: '#F58026',
        ORANGELIGHT: '#F5B826',
        TEXTGREY: '#929497',
        BLACKWHITE: '#ffff',
      };

export const dark = {
  PRIMARY_BG: '#1F1D2B',
  SECONDARY_BG: '#2B2E3D',
  LIGHTGREY: '#2B2E3D',
  WHITE: '#fff',
  BLACK: '#000',
  RED: 'green',
  GREEN: '#19D276',
  ORANGE: '#F58026',
  ORANGELIGHT: '#F5B826',
  TEXTGREY: '#929497',
  BLACKWHITE: '#ffff',
  INACTIVETAB: '#2B2E3D',
};

export const light = {
  PRIMARY_BG: '#fff',
  SECONDARY_BG: '#EEEEEE',
  LIGHTGREY: '#F5F5F5',
  WHITE: '#fff',
  BLACK: '#000',
  RED: '#FF4343',
  GREEN: '#19D276',
  ORANGE: '#F58026',
  ORANGELIGHT: '#F5B826',
  TEXTGREY: '#929497',
  BLACKWHITE: '#000',
INACTIVETAB: '#F5F5F5', //#F5F5F5
};
