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
 * The MozuAppDevContractsAppStoreSupportInfo model module.
 * @module model/MozuAppDevContractsAppStoreSupportInfo
 * @version v1
 */
class MozuAppDevContractsAppStoreSupportInfo {
    /**
     * Constructs a new <code>MozuAppDevContractsAppStoreSupportInfo</code>.
     * @alias module:model/MozuAppDevContractsAppStoreSupportInfo
     */
    constructor() { 
        
        MozuAppDevContractsAppStoreSupportInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAppStoreSupportInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAppStoreSupportInfo} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAppStoreSupportInfo} The populated <code>MozuAppDevContractsAppStoreSupportInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAppStoreSupportInfo();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('hours')) {
                obj['hours'] = ApiClient.convertToType(data['hours'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
MozuAppDevContractsAppStoreSupportInfo.prototype['url'] = undefined;

/**
 * @member {String} phone
 */
MozuAppDevContractsAppStoreSupportInfo.prototype['phone'] = undefined;

/**
 * @member {String} hours
 */
MozuAppDevContractsAppStoreSupportInfo.prototype['hours'] = undefined;






export default MozuAppDevContractsAppStoreSupportInfo;
