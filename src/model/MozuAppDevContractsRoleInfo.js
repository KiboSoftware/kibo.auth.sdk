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
 * The MozuAppDevContractsRoleInfo model module.
 * @module model/MozuAppDevContractsRoleInfo
 * @version v1
 */
class MozuAppDevContractsRoleInfo {
    /**
     * Constructs a new <code>MozuAppDevContractsRoleInfo</code>.
     * @alias module:model/MozuAppDevContractsRoleInfo
     */
    constructor() { 
        
        MozuAppDevContractsRoleInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsRoleInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsRoleInfo} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsRoleInfo} The populated <code>MozuAppDevContractsRoleInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsRoleInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MozuAppDevContractsRoleInfo.prototype['id'] = undefined;

/**
 * @member {String} name
 */
MozuAppDevContractsRoleInfo.prototype['name'] = undefined;






export default MozuAppDevContractsRoleInfo;
