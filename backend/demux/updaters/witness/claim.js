async function claim(state, payload, blockInfo, context) {
  const Witness = state.witness;
  try {
    let witness = await Witness.find({
      _id: {
        timestamp: payload.data.timestamp,
        author: payload.data.author
      }
    }).exec();

    // if witness already exists do not insert it in again
    if (witness.length !== 0) return;

    witness = new Witness({
      _id: {
        timestamp: payload.data.timestamp,
        author: payload.data.author
      },
      author: payload.data.author,
      claim: payload.data.claim,
      Witness: payload.data.witness,
      witnessConfirmed: true
    });
    await witness.save();
  } catch (err) {
    console.error(err);
  }
}
