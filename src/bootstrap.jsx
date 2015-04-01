import React from 'react';
import AbilityGen from './abilityGen';

document.querySelectorAll('.ability-gen-container').forEach((el) => {
  React.render(<AbilityGen />, el);
});
