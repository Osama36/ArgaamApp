import React, { useState } from 'react'
import { useSelector } from 'react-redux';

let mode = "LIGHT";

export default COLORS = (mode == "LIGHT") ? {
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
  BLACKWHITE: '#000'

} :
  {
    PRIMARY_BG: '#fff',
    SECONDARY_BG: '#EEEEEE',
    LIGHTGREY: '#F5F5F5',
    WHITE: '#fff',
    BLACK: '#000',
    RED: 'green',
    GREEN: '#19D276',
    ORANGE: '#F58026',
    ORANGELIGHT: '#F5B826',
    TEXTGREY: '#929497',
    BLACKWHITE: '#ffff'
  }
