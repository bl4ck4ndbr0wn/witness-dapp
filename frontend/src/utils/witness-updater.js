// Update the edited claim od add claim to claims if new claim
export const updateClaimForCreateAndEdit = (prevState, updatedClaim) => {
  let alreadyAdded = false;
  let updatedClaims = prevState.claims.map(claim => {
    console.info({ claim, updatedClaim });
    // if (claim._id === updatedClaim._id) {
    //   alreadyAdded = true;
    //   return {
    //     ...claim,
    //     ...updatedClaims
    //   };
    // }
    return claim;
  });

  // if (!alreadyAdded) {
  //   updatedClaims = [...updatedClaim];
  // }

  return updatedClaims;
};
