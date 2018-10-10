import React from "react";

export default () => {
  const box = {
    color: "dimgray",
    background: "whitesmoke"
  };
  return (
    <section class="price-area overlay section-padding" id="price-page">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
            <div class="page-title">
              <h2>Witnessio</h2>
              <p>Claims decentralized application</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="box" style={box}>
              <div class="box-icon">
                <img src="images/service-icon-1.png" alt="" />
              </div>
              <h4>Claim</h4>
              <p>experience, ccertifications, education etc.</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="box" style={box}>
              <div class="box-icon">
                <img src="images/service-icon-2.png" alt="" />
              </div>
              <h4>Proof</h4>
              <p>Education certificate uploads.</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="box" style={box}>
              <div class="box-icon">
                <img src="images/service-icon-3.png" alt="" />
              </div>
              <h4>Attestations</h4>
              <p>Attest to someone elses claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
