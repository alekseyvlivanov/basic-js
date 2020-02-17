const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  activity = parseFloat(sampleActivity);
  if (isNaN(activity)) return false;
  if (activity > MODERN_ACTIVITY || activity <= 0) return false;

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / activity) / (LN2 / HALF_LIFE_PERIOD),
  );
};
