export function calculateConfidence(axis) {
  if (axis.questionsAsked === 0) return 0;

  const distanceFromCenter = Math.abs(axis.normalizedScore - 50) / 50;

  const scores = axis.responses.map((r) => r.score);
  const avgMagnitude =
    scores.reduce((sum, s) => sum + Math.abs(s), 0) / scores.length;
  const consistency = avgMagnitude / 2;

  const hasStrong = scores.some((s) => Math.abs(s) === 2);
  const hasMixed = scores.some((s) => s > 0) && scores.some((s) => s < 0);
  const contradictionPenalty = hasStrong && hasMixed ? 0.2 : 0;

  return Math.max(
    0,
    distanceFromCenter * 0.5 + consistency * 0.5 - contradictionPenalty
  );
}

export function generateTypeCode(axes) {
  // Score >= 60 → strong high pole (uppercase)
  // Score <= 40 → strong low pole (uppercase)
  // Score 41-59 → leaning/uncertain (lowercase of whichever side they're closer to)
  const letterForScore = (score, highLetter, lowLetter) => {
    if (score >= 60) return highLetter;
    if (score <= 40) return lowLetter;
    // In the uncertain band, lean toward whichever side the score is on
    if (score >= 50) return highLetter.toLowerCase();
    return lowLetter.toLowerCase();
  };

  return [
    letterForScore(axes.outcome.normalizedScore, "G", "B"),
    letterForScore(axes.novelty.normalizedScore, "U", "A"),
    letterForScore(axes.timeline.normalizedScore, "F", "S"),
    letterForScore(axes.control.normalizedScore, "O", "I"),
  ].join("");
}
