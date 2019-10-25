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
 * The MozuAppDevContractsDeveloperAccountAppType model module.
 * @module model/MozuAppDevContractsDeveloperAccountAppType
 * @version v1
 */
class MozuAppDevContractsDeveloperAccountAppType {
    /**
     * Constructs a new <code>MozuAppDevContractsDeveloperAccountAppType</code>.
     * @alias module:model/MozuAppDevContractsDeveloperAccountAppType
     */
    constructor() { 
        
        MozuAppDevContractsDeveloperAccountAppType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsDeveloperAccountAppType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsDeveloperAccountAppType} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsDeveloperAccountAppType} The populated <code>MozuAppDevContractsDeveloperAccountAppType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsDeveloperAccountAppType();

            if (data.hasOwnProperty('developerAccountAppTypeId')) {
                obj['developerAccountAppTypeId'] = ApiClient.convertToType(data['developerAccountAppTypeId'], 'Number');
            }
            if (data.hasOwnProperty('developerAccountTypeId')) {
                obj['developerAccountTypeId'] = ApiClient.convertToType(data['developerAccountTypeId'], 'Number');
            }
            if (data.hasOwnProperty('applicationTypeId')) {
                obj['applicationTypeId'] = ApiClient.convertToType(data['applicationTypeId'], 'Number');
            }
            if (data.hasOwnProperty('devAccountTypeEnabled')) {
                obj['devAccountTypeEnabled'] = ApiClient.convertToType(data['devAccountTypeEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('applicationTypeName')) {
                obj['applicationTypeName'] = ApiClient.convertToType(data['applicationTypeName'], 'String');
            }
            if (data.hasOwnProperty('developerAccountTypeName')) {
                obj['developerAccountTypeName'] = ApiClient.convertToType(data['developerAccountTypeName'], 'String');
            }
            if (data.hasOwnProperty('developerAccountAppTypeEnabled')) {
                obj['developerAccountAppTypeEnabled'] = ApiClient.convertToType(data['developerAccountAppTypeEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} developerAccountAppTypeId
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['developerAccountAppTypeId'] = undefined;

/**
 * @member {Number} developerAccountTypeId
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['developerAccountTypeId'] = undefined;

/**
 * @member {Number} applicationTypeId
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['applicationTypeId'] = undefined;

/**
 * @member {Boolean} devAccountTypeEnabled
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['devAccountTypeEnabled'] = undefined;

/**
 * @member {String} applicationTypeName
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['applicationTypeName'] = undefined;

/**
 * @member {String} developerAccountTypeName
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['developerAccountTypeName'] = undefined;

/**
 * @member {Boolean} developerAccountAppTypeEnabled
 */
MozuAppDevContractsDeveloperAccountAppType.prototype['developerAccountAppTypeEnabled'] = undefined;






export default MozuAppDevContractsDeveloperAccountAppType;
