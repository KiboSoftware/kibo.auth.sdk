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
import MozuAppDevContractsApplicationCapabilityDomainValue from './MozuAppDevContractsApplicationCapabilityDomainValue';

/**
 * The MozuAppDevContractsApplicationCapabilityDomain model module.
 * @module model/MozuAppDevContractsApplicationCapabilityDomain
 * @version v1
 */
class MozuAppDevContractsApplicationCapabilityDomain {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationCapabilityDomain</code>.
     * @alias module:model/MozuAppDevContractsApplicationCapabilityDomain
     */
    constructor() { 
        
        MozuAppDevContractsApplicationCapabilityDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationCapabilityDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationCapabilityDomain} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationCapabilityDomain} The populated <code>MozuAppDevContractsApplicationCapabilityDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationCapabilityDomain();

            if (data.hasOwnProperty('applicationCapabilityDomainId')) {
                obj['applicationCapabilityDomainId'] = ApiClient.convertToType(data['applicationCapabilityDomainId'], 'Number');
            }
            if (data.hasOwnProperty('applicationCapabilityTypeId')) {
                obj['applicationCapabilityTypeId'] = ApiClient.convertToType(data['applicationCapabilityTypeId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('applicationCapabilityDomainValues1')) {
                obj['applicationCapabilityDomainValues1'] = ApiClient.convertToType(data['applicationCapabilityDomainValues1'], [MozuAppDevContractsApplicationCapabilityDomainValue]);
            }
            if (data.hasOwnProperty('applicationCapabilityDomainValues2')) {
                obj['applicationCapabilityDomainValues2'] = ApiClient.convertToType(data['applicationCapabilityDomainValues2'], [MozuAppDevContractsApplicationCapabilityDomainValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationCapabilityDomainId
 */
MozuAppDevContractsApplicationCapabilityDomain.prototype['applicationCapabilityDomainId'] = undefined;

/**
 * @member {Number} applicationCapabilityTypeId
 */
MozuAppDevContractsApplicationCapabilityDomain.prototype['applicationCapabilityTypeId'] = undefined;

/**
 * @member {String} name
 */
MozuAppDevContractsApplicationCapabilityDomain.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsApplicationCapabilityDomainValue>} applicationCapabilityDomainValues1
 */
MozuAppDevContractsApplicationCapabilityDomain.prototype['applicationCapabilityDomainValues1'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsApplicationCapabilityDomainValue>} applicationCapabilityDomainValues2
 */
MozuAppDevContractsApplicationCapabilityDomain.prototype['applicationCapabilityDomainValues2'] = undefined;






export default MozuAppDevContractsApplicationCapabilityDomain;

