# Architecture

```text
Install
  -> OAuth authorization
  -> access token storage
  -> recurring billing request
  -> billing confirmation
  -> entitlement state
  -> webhook-based lifecycle updates
```

Billing state should be treated as server-side entitlement, not only as a front-end UI state.
