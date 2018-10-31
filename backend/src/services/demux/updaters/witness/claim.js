async function createClaim(state, payload, blockInfo, context) {
  const Profile = state.profile;
  try {
    let profile = await Profile.findOne({
      user: payload.data.claimant
    }).exec();

    const newClaim = {
      claim_id: payload.data.claim_id,
      claimant: payload.data.claimant,
      claim: payload.data.claim,
      witnesses: payload.data.witnesses,
      claimConfirmed: true
    };

    if (payload.data.claim_category === "Education") {
      profile.education.unshift(newClaim);

      await profile.save();
    } else if (payload.data.claim_category === "Experience") {
      profile.experience.unshift(newClaim);

      await profile.save();
    } else if (payload.data.claim_category === "Skill") {
      profile.skill.unshift(newClaim);

      await profile.save();
    }
  } catch (err) {
    console.error(err);
  }
}

export default createClaim;
