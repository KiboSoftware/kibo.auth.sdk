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
 * The MozuAppDevContractsApplicationCapabilityDomainValue model module.
 * @module model/MozuAppDevContractsApplicationCapabilityDomainValue
 * @version v1
 */
class MozuAppDevContractsApplicationCapabilityDomainValue {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationCapabilityDomainValue</code>.
     * @alias module:model/MozuAppDevContractsApplicationCapabilityDomainValue
     */
    constructor() { 
        
        MozuAppDevContractsApplicationCapabilityDomainValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationCapabilityDomainValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationCapabilityDomainValue} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationCapabilityDomainValue} The populated <code>MozuAppDevContractsApplicationCapabilityDomainValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationCapabilityDomainValue();

            if (data.hasOwnProperty('applicationCapabilityDomainValueId')) {
                obj['applicationCapabilityDomainValueId'] = ApiClient.convertToType(data['applicationCapabilityDomainValueId'], 'Number');
            }
            if (data.hasOwnProperty('applicationCapabilityDomainId1')) {
                obj['applicationCapabilityDomainId1'] = ApiClient.convertToType(data['applicationCapabilityDomainId1'], 'Number');
            }
            if (data.hasOwnProperty('applicationCapabilityDomainId2')) {
                obj['applicationCapabilityDomainId2'] = ApiClient.convertToType(data['applicationCapabilityDomainId2'], 'Number');
            }
            if (data.hasOwnProperty('valueName')) {
                obj['valueName'] = ApiClient.convertToType(data['valueName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationCapabilityDomainValueId
 */
MozuAppDevContractsApplicationCapabilityDomainValue.prototype['applicationCapabilityDomainValueId'] = undefined;

/**
 * @member {Number} applicationCapabilityDomainId1
 */
MozuAppDevContractsApplicationCapabilityDomainValue.prototype['applicationCapabilityDomainId1'] = undefined;

/**
 * @member {Number} applicationCapabilityDomainId2
 */
MozuAppDevContractsApplicationCapabilityDomainValue.prototype['applicationCapabilityDomainId2'] = undefined;

/**
 * @member {String} valueName
 */
MozuAppDevContractsApplicationCapabilityDomainValue.prototype['valueName'] = undefined;

/**
 * @member {String} displayName
 */
MozuAppDevContractsApplicationCapabilityDomainValue.prototype['displayName'] = undefined;






export default MozuAppDevContractsApplicationCapabilityDomainValue;

