// Polyfill ES5/6 methods.
require('core-js/shim');

import React from 'react';
import AbilityGen from './abilityGen';

[].forEach.call(document.querySelectorAll('.ability-gen-container'), (el) => {
  React.render(<AbilityGen />, el);
});
