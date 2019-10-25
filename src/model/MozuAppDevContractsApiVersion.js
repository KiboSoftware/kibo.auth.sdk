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
 * The MozuAppDevContractsApiVersion model module.
 * @module model/MozuAppDevContractsApiVersion
 * @version v1
 */
class MozuAppDevContractsApiVersion {
    /**
     * Constructs a new <code>MozuAppDevContractsApiVersion</code>.
     * @alias module:model/MozuAppDevContractsApiVersion
     */
    constructor() { 
        
        MozuAppDevContractsApiVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApiVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApiVersion} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApiVersion} The populated <code>MozuAppDevContractsApiVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApiVersion();

            if (data.hasOwnProperty('apiVersionNumber')) {
                obj['apiVersionNumber'] = ApiClient.convertToType(data['apiVersionNumber'], 'String');
            }
            if (data.hasOwnProperty('major')) {
                obj['major'] = ApiClient.convertToType(data['major'], 'Number');
            }
            if (data.hasOwnProperty('minor')) {
                obj['minor'] = ApiClient.convertToType(data['minor'], 'Number');
            }
            if (data.hasOwnProperty('julian')) {
                obj['julian'] = ApiClient.convertToType(data['julian'], 'Number');
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = ApiClient.convertToType(data['build'], 'Number');
            }
            if (data.hasOwnProperty('createDate')) {
                obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
            }
            if (data.hasOwnProperty('isBeta')) {
                obj['isBeta'] = ApiClient.convertToType(data['isBeta'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} apiVersionNumber
 */
MozuAppDevContractsApiVersion.prototype['apiVersionNumber'] = undefined;

/**
 * @member {Number} major
 */
MozuAppDevContractsApiVersion.prototype['major'] = undefined;

/**
 * @member {Number} minor
 */
MozuAppDevContractsApiVersion.prototype['minor'] = undefined;

/**
 * @member {Number} julian
 */
MozuAppDevContractsApiVersion.prototype['julian'] = undefined;

/**
 * @member {Number} build
 */
MozuAppDevContractsApiVersion.prototype['build'] = undefined;

/**
 * @member {Date} createDate
 */
MozuAppDevContractsApiVersion.prototype['createDate'] = undefined;

/**
 * @member {Boolean} isBeta
 */
MozuAppDevContractsApiVersion.prototype['isBeta'] = undefined;






export default MozuAppDevContractsApiVersion;
