import { SvgXml } from 'react-native-svg';

export function PizzaImg() {
  const markup = `<svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect y="0.995361" width="48" height="40" rx="4" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_102_1218" transform="translate(-0.124924) scale(0.000305139 0.000366166)"/>
  </pattern>
  `;

  return <SvgXml xml={markup} />;
}
