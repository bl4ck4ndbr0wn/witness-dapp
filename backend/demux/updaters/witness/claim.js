async function createClaim(state, payload, blockInfo, context) {
  const Claim = state.claim;
  try {
    let claim = await Claim.find({
      claim_id: payload.data.claim_id
    }).exec();

    // if claim already exists do not insert it in again
    if (claim.length !== 0) return;

    claim = new Claim({
      claim_id: payload.data.claim_id,
      claimant: payload.data.claimant,
      claim: payload.data.claim,
      witnesses: payload.data.witnesses,
      claimConfirmed: true
    });
    await claim.save();
  } catch (err) {
    console.error(err);
  }
}

module.exports = createClaim;
