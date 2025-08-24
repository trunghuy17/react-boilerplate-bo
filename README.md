# Login
1. call api login -> return access_token and refresh_token -> save localstore
2. auth routes access_token -> can accept page
3. In checkout product
  - call api create cart -> FE inject access_token in header -> pass to BE side check access_token expired or not
  - if access token has valid -> BE return data
  - if access token invalid -> FE auto call api refresh token (inject refresh_token) -> BE return new access_token -> FE auto call api create cart with new access_token -> BE return data