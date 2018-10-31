function claim(state, payload, blockInfo, context) {
  const claim = {
    claim_id: payload.data.claim_id,
    claimant: payload.data.claimant,
    claim_category: payload.data.claim_category,
    claim: payload.data.claim,
    witnesses: payload.data.witnesses
  };
  context.socket.emit("claim", claim);
}

export default claim;
