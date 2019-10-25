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
import MozuAppDevContractsCapabilityType from './MozuAppDevContractsCapabilityType';

/**
 * The MozuAppDevContractsApplicationCapabilityRequest model module.
 * @module model/MozuAppDevContractsApplicationCapabilityRequest
 * @version v1
 */
class MozuAppDevContractsApplicationCapabilityRequest {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationCapabilityRequest</code>.
     * @alias module:model/MozuAppDevContractsApplicationCapabilityRequest
     */
    constructor() { 
        
        MozuAppDevContractsApplicationCapabilityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationCapabilityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationCapabilityRequest} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationCapabilityRequest} The populated <code>MozuAppDevContractsApplicationCapabilityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationCapabilityRequest();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('capabilityTypes')) {
                obj['capabilityTypes'] = ApiClient.convertToType(data['capabilityTypes'], [MozuAppDevContractsCapabilityType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationId
 */
MozuAppDevContractsApplicationCapabilityRequest.prototype['applicationId'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsCapabilityType>} capabilityTypes
 */
MozuAppDevContractsApplicationCapabilityRequest.prototype['capabilityTypes'] = undefined;






export default MozuAppDevContractsApplicationCapabilityRequest;
