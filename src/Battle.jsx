import React, { Component } from 'react';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHealth: 100,
      playerMana: 100,
      enemyHealth: 100,
      enemyMana: 100
    }
  }

  enemyAction(h, a=-1) {
    let e = Math.floor(Math.random() * 100 % 4 + 1);
    if (e !== 1 || this.state.enemyMana < 10 || this.state.enemyHealth > 90) {
      let damage = Math.floor(Math.random() * 100 % 7 + 1);
      if (this.state.playerHealth - damage <= 0) {
        alert('You lose!');
        this.setState({
          playerHealth: 100,
          playerMana: 100,
          enemyHealth: 100,
          enemyMana: 100
        })
      }
      else {
        if (h) {
          this.setState({
            playerHealth: this.state.playerHealth - damage + 10
          });
        }
        else {
          this.setState({
            playerHealth: this.state.playerHealth - damage
          });
        }
      }
    }
    else {
      let heal = Math.floor(Math.random() * 100 % 10 + 1);
      console.log('enemy hp', this.state.enemyHealth)
      console.log('enemy heal', heal);
      console.log('attacked', a);
      if (a !== -1) {
        this.setState({
          enemyHealth: this.state.enemyHealth + heal - a,
          enemyMana: this.state.enemyMana - 10
        })
      }
      else {
        this.setState({
          enemyHealth: this.state.enemyHealth + heal,
          enemyMana: this.state.enemyMana - 10
        });
      }
    }
  }

  attack() {
    let damage = Math.floor(Math.random() * 100 % 10 + 1);
    if(this.state.enemyHealth - damage <= 0) {
      alert('You win!');
      this.setState({
        playerHealth: 100,
        playerMana: 100,
        enemyHealth: 100,
        enemyMana: 100
      })
    }
    else {
      this.setState({
        enemyHealth: this.state.enemyHealth - damage
      });
      this.enemyAction(false, damage);
    }
  }

  useSpell() {
    let playerMana = this.state.playerMana - 10;
    let h = false;
    if (this.state.playerMana > 0 ) {
      this.setState({playerMana});
      let heal = Math.floor(Math.random() * 100 % 4 + 1);
      if (heal > 1) {
        if (this.state.playerHealth + 10 > 100) {
          this.setState({playerHealth: 100});
        }
        else {
          h = true;
        }
      }
    }
    this.enemyAction(h);
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <div style={{"textAlign": "center",
            "fontSize": "15px",
            "color": "#3cb371",
            "margin": "10px"}}
            >
              You
          </div>
          <div className="progress" style={{"height": "15px", "margin": "0px"}}>
            <div className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{"width": this.state.playerHealth + "%", "height": "15px"}}
              >
                {this.state.playerHealth} HP
            </div>
          </div>
          <div className="progress" style={{"height": "15px"}}>
            <div className="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{"width": this.state.playerMana + "%", "height": "15px", "margin": "0px"}}
              >
                {this.state.playerMana} MP
              </div>
          </div>
          <button className="btn btn-danger"
            onClick={() => this.attack()}
            title="take 1 - 10 damage"
            >
              Attack!
          </button>
          <button className="btn btn-info"
            style={{"marginLeft": "5px"}}
            onClick={() => this.useSpell()}
            title="Cost: 10 MP"
            >
              Use spell
          </button>
        </div>


{/* Enemy */}


        <div className="col-md-4 col-md-offset-4">
          <div style={{"textAlign": "center",
            "fontSize": "15px",
            "color": "#E41B17",
            "margin": "10px"}}
            >
              Enemy
          </div>
          <div className="progress" style={{"height": "15px", "margin": "0px"}}>
            <div className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{"width": this.state.enemyHealth + "%", "height": "15px"}}
              >
                {this.state.enemyHealth} HP
            </div>
          </div>
          <div className="progress" style={{"height": "15px"}}>
            <div className="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{"width": this.state.enemyMana + "%", "height": "15px", "margin": "0px"}}
              >
                {this.state.enemyMana} MP
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle
