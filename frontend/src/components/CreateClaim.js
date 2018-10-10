import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import randomId from "random-id";

class CreateClaim extends Component {
  state = {
    witnesses: [],
    claim: ""
  };

  handleOnChange = (e, opt) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectOnChange = opt => {
    let newWitnesses = [];
    for (let i in opt) {
      newWitnesses.push(opt[i].value);
    }

    this.setState({ witnesses: [...newWitnesses] });
  };

  createClaim = e => {
    e.preventDefault();
    // length of the id (default is 30)
    const len = 30;
    // pattern to determin how the id will be generated
    // default is aA0 it has a chance for lowercased capitals and numbers
    const pattern = "aA0";

    let id = randomId(len, pattern);

    this.props.createClaim({ ...this.state, claim_id: id });

    this.setState({
      witnesses: [],
      claim: ""
    });
  };

  render() {
    const options = [
      { label: "bobross", value: "bobross" },
      { label: "janesmith", value: "janesmith" },
      { label: "sampeters", value: "sampeters" },
      { label: "willthompson", value: "willthompson" },
      { label: "sarabrown", value: "sarabrown" },
      { label: "lisawalters", value: "lisawalters" }
    ];
    return (
      <section class="gray-bg section-padding" id="service-page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div class="page-title">
                <h2>Claims</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit voluptates, temporibus at, facere harum fugiat!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-4">
              <address class="side-icon-boxes">
                <div class="side-icon-box">
                  <div class="side-icon">
                    <img src="images/location-arrow.png" alt="" />
                  </div>
                  <p>
                    <strong>Address: </strong> Box 564, Disneyland <br />
                    USA
                  </p>
                </div>
                <div class="side-icon-box">
                  <div class="side-icon">
                    <img src="images/phone-arrow.png" alt="" />
                  </div>
                  <p>
                    <strong>Telephone: </strong>
                    <a href="callto:8801812726495">+8801812726495</a> <br />
                    <a href="callto:8801687420471">+8801687420471</a>
                  </p>
                </div>
                <div class="side-icon-box">
                  <div class="side-icon">
                    <img src="images/mail-arrow.png" alt="" />
                  </div>
                  <p>
                    <strong>E-mail: </strong>
                    <a href="mailto:youremail@example.com">
                      youremail@example.com
                    </a>{" "}
                    <br />
                    <a href="mailto:youremail@example.com">example@mail.com</a>
                  </p>
                </div>
              </address>
            </div>
            <div class="col-xs-12 col-md-8">
              <form onSubmit={this.createClaim} class="contact-form">
                <textarea
                  name="claim"
                  id="claim"
                  rows="5"
                  class="form-control"
                  placeholder="Your message"
                  // required="required"
                  value={this.state.claim}
                  onChange={this.handleOnChange}
                />
                <Select
                  onChange={opt => this.handleSelectOnChange(opt)}
                  options={options}
                  isMulti
                />

                <button type="submit" class="button">
                  Save Claim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
CreateClaim.propTypes = {
  createClaim: PropTypes.func.isRequired
};

export default CreateClaim;
