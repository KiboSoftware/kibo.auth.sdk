# KiboAppDevService.AppAuthTicketsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthAuthenticateApp**](AppAuthTicketsApi.md#oauthAuthenticateApp) | **POST** /platform/applications/authtickets/oauth | 



## oauthAuthenticateApp

> MozuAppDevContractsOAuthAccessTokenResponse oauthAuthenticateApp(opts)



### Example

```javascript
import KiboAppDevService from 'kibo_app_dev_service';
let defaultClient = KiboAppDevService.ApiClient.instance;
// Configure API key authorization: x-vol-app-claims
let x-vol-app-claims = defaultClient.authentications['x-vol-app-claims'];
x-vol-app-claims.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-vol-app-claims.apiKeyPrefix = 'Token';
// Configure API key authorization: x-vol-user-claims
let x-vol-user-claims = defaultClient.authentications['x-vol-user-claims'];
x-vol-user-claims.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//x-vol-user-claims.apiKeyPrefix = 'Token';

let apiInstance = new KiboAppDevService.AppAuthTicketsApi();
let opts = {
  'xVolTenant': 56, // Number | 
  'xVolSite': 56, // Number | 
  'appAuthInfo': new KiboAppDevService.MozuAppDevContractsOauthAuthRequest() // MozuAppDevContractsOauthAuthRequest | 
};
apiInstance.oauthAuthenticateApp(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xVolTenant** | **Number**|  | [optional] 
 **xVolSite** | **Number**|  | [optional] 
 **appAuthInfo** | [**MozuAppDevContractsOauthAuthRequest**](MozuAppDevContractsOauthAuthRequest.md)|  | [optional] 

### Return type

[**MozuAppDevContractsOAuthAccessTokenResponse**](MozuAppDevContractsOAuthAccessTokenResponse.md)

### Authorization

[x-vol-app-claims](../README.md#x-vol-app-claims), [x-vol-user-claims](../README.md#x-vol-user-claims)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

