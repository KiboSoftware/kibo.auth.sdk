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
import MozuCoreApiContractsAuditInfo from './MozuCoreApiContractsAuditInfo';

/**
 * The MozuAppDevContractsApplicationLicense model module.
 * @module model/MozuAppDevContractsApplicationLicense
 * @version v1
 */
class MozuAppDevContractsApplicationLicense {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationLicense</code>.
     * @alias module:model/MozuAppDevContractsApplicationLicense
     */
    constructor() { 
        
        MozuAppDevContractsApplicationLicense.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationLicense} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationLicense} The populated <code>MozuAppDevContractsApplicationLicense</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationLicense();

            if (data.hasOwnProperty('applicationLicenseId')) {
                obj['applicationLicenseId'] = ApiClient.convertToType(data['applicationLicenseId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('applicationLicenseTypeId')) {
                obj['applicationLicenseTypeId'] = ApiClient.convertToType(data['applicationLicenseTypeId'], 'Number');
            }
            if (data.hasOwnProperty('localeCode')) {
                obj['localeCode'] = ApiClient.convertToType(data['localeCode'], 'String');
            }
            if (data.hasOwnProperty('applicationPrice')) {
                obj['applicationPrice'] = ApiClient.convertToType(data['applicationPrice'], 'Number');
            }
            if (data.hasOwnProperty('isoCurrencyCode')) {
                obj['isoCurrencyCode'] = ApiClient.convertToType(data['isoCurrencyCode'], 'String');
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationLicenseId
 */
MozuAppDevContractsApplicationLicense.prototype['applicationLicenseId'] = undefined;

/**
 * @member {Number} applicationId
 */
MozuAppDevContractsApplicationLicense.prototype['applicationId'] = undefined;

/**
 * @member {Number} applicationLicenseTypeId
 */
MozuAppDevContractsApplicationLicense.prototype['applicationLicenseTypeId'] = undefined;

/**
 * @member {String} localeCode
 */
MozuAppDevContractsApplicationLicense.prototype['localeCode'] = undefined;

/**
 * @member {Number} applicationPrice
 */
MozuAppDevContractsApplicationLicense.prototype['applicationPrice'] = undefined;

/**
 * @member {String} isoCurrencyCode
 */
MozuAppDevContractsApplicationLicense.prototype['isoCurrencyCode'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuAppDevContractsApplicationLicense.prototype['auditInfo'] = undefined;






export default MozuAppDevContractsApplicationLicense;

