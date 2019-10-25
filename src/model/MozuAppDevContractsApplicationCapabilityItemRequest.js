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

/**
 * The MozuAppDevContractsApplicationCapabilityItemRequest model module.
 * @module model/MozuAppDevContractsApplicationCapabilityItemRequest
 * @version v1
 */
class MozuAppDevContractsApplicationCapabilityItemRequest {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationCapabilityItemRequest</code>.
     * @alias module:model/MozuAppDevContractsApplicationCapabilityItemRequest
     */
    constructor() { 
        
        MozuAppDevContractsApplicationCapabilityItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationCapabilityItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationCapabilityItemRequest} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationCapabilityItemRequest} The populated <code>MozuAppDevContractsApplicationCapabilityItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationCapabilityItemRequest();

            if (data.hasOwnProperty('packageId')) {
                obj['packageId'] = ApiClient.convertToType(data['packageId'], 'Number');
            }
            if (data.hasOwnProperty('isImplemented')) {
                obj['isImplemented'] = ApiClient.convertToType(data['isImplemented'], 'Boolean');
            }
            if (data.hasOwnProperty('capabilityTypeId')) {
                obj['capabilityTypeId'] = ApiClient.convertToType(data['capabilityTypeId'], 'Number');
            }
            if (data.hasOwnProperty('capabilityTypeName')) {
                obj['capabilityTypeName'] = ApiClient.convertToType(data['capabilityTypeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} packageId
 */
MozuAppDevContractsApplicationCapabilityItemRequest.prototype['packageId'] = undefined;

/**
 * @member {Boolean} isImplemented
 */
MozuAppDevContractsApplicationCapabilityItemRequest.prototype['isImplemented'] = undefined;

/**
 * @member {Number} capabilityTypeId
 */
MozuAppDevContractsApplicationCapabilityItemRequest.prototype['capabilityTypeId'] = undefined;

/**
 * @member {String} capabilityTypeName
 */
MozuAppDevContractsApplicationCapabilityItemRequest.prototype['capabilityTypeName'] = undefined;






export default MozuAppDevContractsApplicationCapabilityItemRequest;
