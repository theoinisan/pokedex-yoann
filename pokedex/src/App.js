import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import BubbleList from "./BubbleList";
import Search from "./Search";

import bubbles from "./bubbles-list";

class App extends Component {
  state = {
    attack: null,
    defender: null,
    score: null
  };

  onSearchChange = ({ searchId, value }) => {
    if (bubbles.find(bubble => bubble.name === value)) {
      this.setState(
        () => ({
          [searchId]: value
        }),
        async () => {
          const { attack, defender } = this.state;
          if (attack && defender) {
            try {
              const res = await axios.get("https://pokeapi.co/api/v2/type/");
              const types = res.data.results;
              const type = res.data.results.find(
                type => type.name === this.state.attack
              );
              if (type) {
                const res = await axios.get(type.url);
                const damages = res.data.damage_relations;
                const damagesTypes = [
                  "double_damage_to",
                  "half_damage_to",
                  "no_damage_to"
                ];
                const damageMap = {
                  double_damage_to: 2,
                  half_damage_to: 0.5,
                  no_damage_to: 0
                };
                let score = 1;
                damagesTypes.forEach(type => {
                  if (
                    damages.hasOwnProperty(type) &&
                    damages[type].find(
                      item => item.name === this.state.defender
                    )
                  ) {
                    score = damageMap[type];
                  }
                });
                this.setState(() => ({
                  score
                }));
              }
            } catch (e) {
              //
            }
          }
        }
      );
    } else if (this.state[searchId]) {
      this.setState(() => ({
        [searchId]: null
      }));
    }
  };

  render() {
    const { attack, defender, score } = this.state;
    let activeBubbles = {};
    if (attack) {
      activeBubbles[attack] = true;
    }
    if (defender) {
      activeBubbles[defender] = true;
    }
    return (
      <div className="App">
        <div className="App__container">
          <div className="App__content">
            <div style={{ height: 500 }}>
              <BubbleList activeBubbles={activeBubbles} />
            </div>
            <div>
              <Search onChange={this.onSearchChange} />
              <h1>{score}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
