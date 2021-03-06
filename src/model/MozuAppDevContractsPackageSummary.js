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
 * The MozuAppDevContractsPackageSummary model module.
 * @module model/MozuAppDevContractsPackageSummary
 * @version v1
 */
class MozuAppDevContractsPackageSummary {
    /**
     * Constructs a new <code>MozuAppDevContractsPackageSummary</code>.
     * @alias module:model/MozuAppDevContractsPackageSummary
     */
    constructor() { 
        
        MozuAppDevContractsPackageSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsPackageSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsPackageSummary} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsPackageSummary} The populated <code>MozuAppDevContractsPackageSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsPackageSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('applicationName')) {
                obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
            }
            if (data.hasOwnProperty('applicationTypeId')) {
                obj['applicationTypeId'] = ApiClient.convertToType(data['applicationTypeId'], 'Number');
            }
            if (data.hasOwnProperty('majorVersion')) {
                obj['majorVersion'] = ApiClient.convertToType(data['majorVersion'], 'Number');
            }
            if (data.hasOwnProperty('minorVersion')) {
                obj['minorVersion'] = ApiClient.convertToType(data['minorVersion'], 'Number');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
            }
            if (data.hasOwnProperty('isLocked')) {
                obj['isLocked'] = ApiClient.convertToType(data['isLocked'], 'Boolean');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MozuAppDevContractsPackageSummary.prototype['id'] = undefined;

/**
 * @member {String} name
 */
MozuAppDevContractsPackageSummary.prototype['name'] = undefined;

/**
 * @member {String} applicationName
 */
MozuAppDevContractsPackageSummary.prototype['applicationName'] = undefined;

/**
 * @member {Number} applicationTypeId
 */
MozuAppDevContractsPackageSummary.prototype['applicationTypeId'] = undefined;

/**
 * @member {Number} majorVersion
 */
MozuAppDevContractsPackageSummary.prototype['majorVersion'] = undefined;

/**
 * @member {Number} minorVersion
 */
MozuAppDevContractsPackageSummary.prototype['minorVersion'] = undefined;

/**
 * @member {Number} revision
 */
MozuAppDevContractsPackageSummary.prototype['revision'] = undefined;

/**
 * @member {Boolean} isLocked
 */
MozuAppDevContractsPackageSummary.prototype['isLocked'] = undefined;

/**
 * @member {Number} applicationId
 */
MozuAppDevContractsPackageSummary.prototype['applicationId'] = undefined;






export default MozuAppDevContractsPackageSummary;

