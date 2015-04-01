import React from "react";

var internal = {};

var AbilityGen = React.createClass({
  getInitialState() {
    return {
      scores: {
        str: 8,
        con: 8,
        dex: 8,
        int: 8,
        wis: 8,
        cha: 8
      }
    };
  },
  render() {
    var abilities = Object.keys(this.state.scores);

    return (
      <div class="ability-gen">
        <div class="ability-gen__points-left">Points left: {this.getPointsLeft}</div>}
        {abilities.map(this.renderAbility)}
      </div>
    );
  },
  renderAbility(ability) {
    return (
      <label>
        {ability}
        <input type="number"
          step="1" min="8" max="18"
          value={this.state.scores[ability]}
          onChange={this.getAbilityChangeHandler(ability)}
        />
      </label>
    );
  },
  getPointsLeft() {
    var scores = this.state.scores;
    var totalCost = Object.keys(scores).map((key) => internal.abilityCosts[scores[key]])

    return internal.pointMax - totalCost;
  },
  getAbilityChangeHandler(ability) {
    return function handleAbilityChange(e) {
      var val = Math.max(Math.min(Math.floor(e.target.value), 18), 8);

      this.setState((prevState) =>
        Object.assign({}, prevState, { [ability]: val }));
    }
  }
});

internal.abilityCosts = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 6,
  15: 8,
  16: 10,
  17: 13,
  18: 16
};
internal.pointCost = 28;

export default AbilityGen;
