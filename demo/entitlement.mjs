function canUsePaidFeature(subscription) {
  return Boolean(subscription && subscription.status === "ACTIVE");
}

const cases = [
  [{ status: "ACTIVE" }, true],
  [{ status: "CANCELLED" }, false],
  [{ status: "PENDING" }, false],
  [null, false]
];

for (const [input, expected] of cases) {
  const actual = canUsePaidFeature(input);
  if (actual !== expected) throw new Error("Entitlement mismatch for " + JSON.stringify(input));
}
console.log("PASS: entitlement logic handles active and inactive billing states");
