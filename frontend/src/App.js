import React, { Component } from "react";
import axios from "axios";

import EOSIOClient from "./utils/eosio-client";
import IOClient from "./utils/io-client";
import { updateClaimForCreateAndEdit } from "./utils/witness-updater";
import CreateClaim from "./components/CreateClaim";
import Claims from "./components/Claims";
import Navigation from "./components/Navigation";
import HeaderArea from "./components/HeaderArea";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    claims: []
  };

  // Instantiate shared eosjs helper and socket io helper
  constructor(props) {
    super(props);
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT;
    this.eosio = new EOSIOClient(contractAccount);
    this.io = new IOClient();
  }

  // Enable Realtime updates via Socket.io
  async componentDidMount() {
    this.loadClaims();
    this.io.onMessage("claim", claim => {
      this.setState(prevState => ({
        claims: updateClaimForCreateAndEdit(prevState, claim)
      }));
    });
  }

  // Load claims
  loadClaims = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/witness`
    );
    this.setState({ claims: response.data.reverse() });
  };

  // Create a claim
  createClaim = async claim => {
    try {
      console.log(claim);
      const newClaim = {
        ...claim,
        claimant: process.env.REACT_APP_EOSIO_ACCOUNT
      };
      console.log("next make transaction");
      await this.eosio.transaction(
        process.env.REACT_APP_EOSIO_ACCOUNT,
        "claim",
        {
          claimant: newClaim.claimant,
          ...claim
        }
      );

      console.log("next set state");

      this.setState(prevState => ({
        claims: updateClaimForCreateAndEdit(prevState, newClaim)
      }));
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(this.state.claims);
    return (
      <div>
        {/* <!--Mainmenu-area--> */}
        <Navigation />
        {/* <!--Mainmenu-area/--> */}

        {/* <!--Header-area--> */}
        <HeaderArea />
        {/* <!--Header-area/--> */}
        {/* <!--Feature-area--> */}

        <CreateClaim createClaim={this.createClaim} />

        {/* <!--Feature-area/--> */}
        <Footer />
      </div>
    );
  }
}

export default App;
