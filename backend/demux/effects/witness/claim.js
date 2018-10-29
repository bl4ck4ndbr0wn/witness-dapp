function createPost(state, payload, blockInfo, context) {
  const post = {
    claim_id: payload.data.claim_id,
    claimant: payload.data.claimant,
    claim: payload.data.claim,
    witnesses: payload.data.witnesses
  };
  context.socket.emit("createpost", post);
}

module.exports = createPost;
