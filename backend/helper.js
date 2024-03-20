const calculateScore = (years) => {
  if (years < 1) {
    return 1;
  } else if (years >= 1 && years <= 2) {
    return 2;
  } else {
    return 3;
  }
};

const calculateTotalScore = (nodeExperience, reactExperience) => {
  const nodeScore = calculateScore(nodeExperience);
  const reactScore = calculateScore(reactExperience);
  console.log("nodeScore", nodeScore);
  console.log("reactScore", reactScore);
  return nodeScore + reactScore;
};

module.exports = { calculateTotalScore };
