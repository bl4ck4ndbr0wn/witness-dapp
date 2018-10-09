function claim(state, payload, blockInfo, context) {
  const witness = {
    _id: {
      timestamp: payload.data.timestamp,
      author: payload.data.author
    },
    author: payload.data.author,
    claim: payload.data.claim,
    Witness: payload.data.witness
  };
  context.socket.emit("claim", witness);
}

module.exports = claim;
