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
 * The MozuAppDevContractsCreditType model module.
 * @module model/MozuAppDevContractsCreditType
 * @version v1
 */
class MozuAppDevContractsCreditType {
    /**
     * Constructs a new <code>MozuAppDevContractsCreditType</code>.
     * @alias module:model/MozuAppDevContractsCreditType
     */
    constructor() { 
        
        MozuAppDevContractsCreditType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsCreditType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsCreditType} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsCreditType} The populated <code>MozuAppDevContractsCreditType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsCreditType();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
MozuAppDevContractsCreditType.prototype['name'] = undefined;

/**
 * @member {String} code
 */
MozuAppDevContractsCreditType.prototype['code'] = undefined;






export default MozuAppDevContractsCreditType;
