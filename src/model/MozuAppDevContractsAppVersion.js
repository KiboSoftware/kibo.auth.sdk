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
 * The MozuAppDevContractsAppVersion model module.
 * @module model/MozuAppDevContractsAppVersion
 * @version v1
 */
class MozuAppDevContractsAppVersion {
    /**
     * Constructs a new <code>MozuAppDevContractsAppVersion</code>.
     * @alias module:model/MozuAppDevContractsAppVersion
     */
    constructor() { 
        
        MozuAppDevContractsAppVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAppVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAppVersion} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAppVersion} The populated <code>MozuAppDevContractsAppVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAppVersion();

            if (data.hasOwnProperty('majorVersion')) {
                obj['majorVersion'] = ApiClient.convertToType(data['majorVersion'], 'Number');
            }
            if (data.hasOwnProperty('minorVersion')) {
                obj['minorVersion'] = ApiClient.convertToType(data['minorVersion'], 'Number');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} majorVersion
 */
MozuAppDevContractsAppVersion.prototype['majorVersion'] = undefined;

/**
 * @member {Number} minorVersion
 */
MozuAppDevContractsAppVersion.prototype['minorVersion'] = undefined;

/**
 * @member {Number} revision
 */
MozuAppDevContractsAppVersion.prototype['revision'] = undefined;






export default MozuAppDevContractsAppVersion;
