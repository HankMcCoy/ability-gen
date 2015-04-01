// Polyfill ES5/6 methods.
require('core-js/shim');

import React from 'react';
import AbilityGen from './abilityGen';

[].slice.apply(document.querySelectorAll('.ability-gen-container')).forEach((el) => {
  React.render(<AbilityGen />, el);
});
