export function canUsePaidFeature(subscription) {
  return Boolean(
    subscription &&
    subscription.status === "ACTIVE"
  );
}
