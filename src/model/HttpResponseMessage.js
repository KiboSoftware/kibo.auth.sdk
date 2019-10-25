/**
 * Kibo AppDev Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HttpContent from './HttpContent';
import HttpRequestMessage from './HttpRequestMessage';
import KeyValuePair2 from './KeyValuePair2';
import Version from './Version';

/**
 * The HttpResponseMessage model module.
 * @module model/HttpResponseMessage
 * @version v1
 */
class HttpResponseMessage {
    /**
     * Constructs a new <code>HttpResponseMessage</code>.
     * @alias module:model/HttpResponseMessage
     */
    constructor() { 
        
        HttpResponseMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HttpResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HttpResponseMessage} obj Optional instance to populate.
     * @return {module:model/HttpResponseMessage} The populated <code>HttpResponseMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpResponseMessage();

            if (data.hasOwnProperty('version')) {
                obj['version'] = Version.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = HttpContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'String');
            }
            if (data.hasOwnProperty('reasonPhrase')) {
                obj['reasonPhrase'] = ApiClient.convertToType(data['reasonPhrase'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [KeyValuePair2]);
            }
            if (data.hasOwnProperty('requestMessage')) {
                obj['requestMessage'] = HttpRequestMessage.constructFromObject(data['requestMessage']);
            }
            if (data.hasOwnProperty('isSuccessStatusCode')) {
                obj['isSuccessStatusCode'] = ApiClient.convertToType(data['isSuccessStatusCode'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Version} version
 */
HttpResponseMessage.prototype['version'] = undefined;

/**
 * @member {module:model/HttpContent} content
 */
HttpResponseMessage.prototype['content'] = undefined;

/**
 * @member {module:model/HttpResponseMessage.StatusCodeEnum} statusCode
 */
HttpResponseMessage.prototype['statusCode'] = undefined;

/**
 * @member {String} reasonPhrase
 */
HttpResponseMessage.prototype['reasonPhrase'] = undefined;

/**
 * @member {Array.<module:model/KeyValuePair2>} headers
 */
HttpResponseMessage.prototype['headers'] = undefined;

/**
 * @member {module:model/HttpRequestMessage} requestMessage
 */
HttpResponseMessage.prototype['requestMessage'] = undefined;

/**
 * @member {Boolean} isSuccessStatusCode
 */
HttpResponseMessage.prototype['isSuccessStatusCode'] = undefined;





/**
 * Allowed values for the <code>statusCode</code> property.
 * @enum {String}
 * @readonly
 */
HttpResponseMessage['StatusCodeEnum'] = {

    /**
     * value: "Continue"
     * @const
     */
    "Continue": "Continue",

    /**
     * value: "SwitchingProtocols"
     * @const
     */
    "SwitchingProtocols": "SwitchingProtocols",

    /**
     * value: "Processing"
     * @const
     */
    "Processing": "Processing",

    /**
     * value: "EarlyHints"
     * @const
     */
    "EarlyHints": "EarlyHints",

    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",

    /**
     * value: "Created"
     * @const
     */
    "Created": "Created",

    /**
     * value: "Accepted"
     * @const
     */
    "Accepted": "Accepted",

    /**
     * value: "NonAuthoritativeInformation"
     * @const
     */
    "NonAuthoritativeInformation": "NonAuthoritativeInformation",

    /**
     * value: "NoContent"
     * @const
     */
    "NoContent": "NoContent",

    /**
     * value: "ResetContent"
     * @const
     */
    "ResetContent": "ResetContent",

    /**
     * value: "PartialContent"
     * @const
     */
    "PartialContent": "PartialContent",

    /**
     * value: "MultiStatus"
     * @const
     */
    "MultiStatus": "MultiStatus",

    /**
     * value: "AlreadyReported"
     * @const
     */
    "AlreadyReported": "AlreadyReported",

    /**
     * value: "IMUsed"
     * @const
     */
    "IMUsed": "IMUsed",

    /**
     * value: "MultipleChoices"
     * @const
     */
    "MultipleChoices": "MultipleChoices",

    /**
     * value: "Ambiguous"
     * @const
     */
    "Ambiguous": "Ambiguous",

    /**
     * value: "MovedPermanently"
     * @const
     */
    "MovedPermanently": "MovedPermanently",

    /**
     * value: "Moved"
     * @const
     */
    "Moved": "Moved",

    /**
     * value: "Found"
     * @const
     */
    "Found": "Found",

    /**
     * value: "Redirect"
     * @const
     */
    "Redirect": "Redirect",

    /**
     * value: "SeeOther"
     * @const
     */
    "SeeOther": "SeeOther",

    /**
     * value: "RedirectMethod"
     * @const
     */
    "RedirectMethod": "RedirectMethod",

    /**
     * value: "NotModified"
     * @const
     */
    "NotModified": "NotModified",

    /**
     * value: "UseProxy"
     * @const
     */
    "UseProxy": "UseProxy",

    /**
     * value: "Unused"
     * @const
     */
    "Unused": "Unused",

    /**
     * value: "TemporaryRedirect"
     * @const
     */
    "TemporaryRedirect": "TemporaryRedirect",

    /**
     * value: "RedirectKeepVerb"
     * @const
     */
    "RedirectKeepVerb": "RedirectKeepVerb",

    /**
     * value: "PermanentRedirect"
     * @const
     */
    "PermanentRedirect": "PermanentRedirect",

    /**
     * value: "BadRequest"
     * @const
     */
    "BadRequest": "BadRequest",

    /**
     * value: "Unauthorized"
     * @const
     */
    "Unauthorized": "Unauthorized",

    /**
     * value: "PaymentRequired"
     * @const
     */
    "PaymentRequired": "PaymentRequired",

    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden",

    /**
     * value: "NotFound"
     * @const
     */
    "NotFound": "NotFound",

    /**
     * value: "MethodNotAllowed"
     * @const
     */
    "MethodNotAllowed": "MethodNotAllowed",

    /**
     * value: "NotAcceptable"
     * @const
     */
    "NotAcceptable": "NotAcceptable",

    /**
     * value: "ProxyAuthenticationRequired"
     * @const
     */
    "ProxyAuthenticationRequired": "ProxyAuthenticationRequired",

    /**
     * value: "RequestTimeout"
     * @const
     */
    "RequestTimeout": "RequestTimeout",

    /**
     * value: "Conflict"
     * @const
     */
    "Conflict": "Conflict",

    /**
     * value: "Gone"
     * @const
     */
    "Gone": "Gone",

    /**
     * value: "LengthRequired"
     * @const
     */
    "LengthRequired": "LengthRequired",

    /**
     * value: "PreconditionFailed"
     * @const
     */
    "PreconditionFailed": "PreconditionFailed",

    /**
     * value: "RequestEntityTooLarge"
     * @const
     */
    "RequestEntityTooLarge": "RequestEntityTooLarge",

    /**
     * value: "RequestUriTooLong"
     * @const
     */
    "RequestUriTooLong": "RequestUriTooLong",

    /**
     * value: "UnsupportedMediaType"
     * @const
     */
    "UnsupportedMediaType": "UnsupportedMediaType",

    /**
     * value: "RequestedRangeNotSatisfiable"
     * @const
     */
    "RequestedRangeNotSatisfiable": "RequestedRangeNotSatisfiable",

    /**
     * value: "ExpectationFailed"
     * @const
     */
    "ExpectationFailed": "ExpectationFailed",

    /**
     * value: "MisdirectedRequest"
     * @const
     */
    "MisdirectedRequest": "MisdirectedRequest",

    /**
     * value: "UnprocessableEntity"
     * @const
     */
    "UnprocessableEntity": "UnprocessableEntity",

    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",

    /**
     * value: "FailedDependency"
     * @const
     */
    "FailedDependency": "FailedDependency",

    /**
     * value: "UpgradeRequired"
     * @const
     */
    "UpgradeRequired": "UpgradeRequired",

    /**
     * value: "PreconditionRequired"
     * @const
     */
    "PreconditionRequired": "PreconditionRequired",

    /**
     * value: "TooManyRequests"
     * @const
     */
    "TooManyRequests": "TooManyRequests",

    /**
     * value: "RequestHeaderFieldsTooLarge"
     * @const
     */
    "RequestHeaderFieldsTooLarge": "RequestHeaderFieldsTooLarge",

    /**
     * value: "UnavailableForLegalReasons"
     * @const
     */
    "UnavailableForLegalReasons": "UnavailableForLegalReasons",

    /**
     * value: "InternalServerError"
     * @const
     */
    "InternalServerError": "InternalServerError",

    /**
     * value: "NotImplemented"
     * @const
     */
    "NotImplemented": "NotImplemented",

    /**
     * value: "BadGateway"
     * @const
     */
    "BadGateway": "BadGateway",

    /**
     * value: "ServiceUnavailable"
     * @const
     */
    "ServiceUnavailable": "ServiceUnavailable",

    /**
     * value: "GatewayTimeout"
     * @const
     */
    "GatewayTimeout": "GatewayTimeout",

    /**
     * value: "HttpVersionNotSupported"
     * @const
     */
    "HttpVersionNotSupported": "HttpVersionNotSupported",

    /**
     * value: "VariantAlsoNegotiates"
     * @const
     */
    "VariantAlsoNegotiates": "VariantAlsoNegotiates",

    /**
     * value: "InsufficientStorage"
     * @const
     */
    "InsufficientStorage": "InsufficientStorage",

    /**
     * value: "LoopDetected"
     * @const
     */
    "LoopDetected": "LoopDetected",

    /**
     * value: "NotExtended"
     * @const
     */
    "NotExtended": "NotExtended",

    /**
     * value: "NetworkAuthenticationRequired"
     * @const
     */
    "NetworkAuthenticationRequired": "NetworkAuthenticationRequired"
};



export default HttpResponseMessage;
