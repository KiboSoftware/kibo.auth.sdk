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
import MozuAppDevContractsAppStoreSupportInfo from './MozuAppDevContractsAppStoreSupportInfo';
import MozuAppDevContractsLocalizedImage from './MozuAppDevContractsLocalizedImage';
import MozuCoreApiContractsAuditInfo from './MozuCoreApiContractsAuditInfo';

/**
 * The MozuAppDevContractsAppStoreLocalizedProfile model module.
 * @module model/MozuAppDevContractsAppStoreLocalizedProfile
 * @version v1
 */
class MozuAppDevContractsAppStoreLocalizedProfile {
    /**
     * Constructs a new <code>MozuAppDevContractsAppStoreLocalizedProfile</code>.
     * @alias module:model/MozuAppDevContractsAppStoreLocalizedProfile
     */
    constructor() { 
        
        MozuAppDevContractsAppStoreLocalizedProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAppStoreLocalizedProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAppStoreLocalizedProfile} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAppStoreLocalizedProfile} The populated <code>MozuAppDevContractsAppStoreLocalizedProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAppStoreLocalizedProfile();

            if (data.hasOwnProperty('localeCode')) {
                obj['localeCode'] = ApiClient.convertToType(data['localeCode'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('appProductCode')) {
                obj['appProductCode'] = ApiClient.convertToType(data['appProductCode'], 'String');
            }
            if (data.hasOwnProperty('appStoreName')) {
                obj['appStoreName'] = ApiClient.convertToType(data['appStoreName'], 'String');
            }
            if (data.hasOwnProperty('shortDescription')) {
                obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
            }
            if (data.hasOwnProperty('longDescription')) {
                obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
            }
            if (data.hasOwnProperty('releaseNotes')) {
                obj['releaseNotes'] = ApiClient.convertToType(data['releaseNotes'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('support')) {
                obj['support'] = MozuAppDevContractsAppStoreSupportInfo.constructFromObject(data['support']);
            }
            if (data.hasOwnProperty('prerequisites')) {
                obj['prerequisites'] = ApiClient.convertToType(data['prerequisites'], 'String');
            }
            if (data.hasOwnProperty('publishDate')) {
                obj['publishDate'] = ApiClient.convertToType(data['publishDate'], 'Date');
            }
            if (data.hasOwnProperty('inactiveDate')) {
                obj['inactiveDate'] = ApiClient.convertToType(data['inactiveDate'], 'Date');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], {'String': MozuAppDevContractsLocalizedImage});
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} localeCode
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['localeCode'] = undefined;

/**
 * @member {String} status
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['status'] = undefined;

/**
 * @member {String} appProductCode
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['appProductCode'] = undefined;

/**
 * @member {String} appStoreName
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['appStoreName'] = undefined;

/**
 * @member {String} shortDescription
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['shortDescription'] = undefined;

/**
 * @member {String} longDescription
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['longDescription'] = undefined;

/**
 * @member {String} releaseNotes
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['releaseNotes'] = undefined;

/**
 * @member {String} website
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['website'] = undefined;

/**
 * @member {module:model/MozuAppDevContractsAppStoreSupportInfo} support
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['support'] = undefined;

/**
 * @member {String} prerequisites
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['prerequisites'] = undefined;

/**
 * @member {Date} publishDate
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['publishDate'] = undefined;

/**
 * @member {Date} inactiveDate
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['inactiveDate'] = undefined;

/**
 * @member {Object.<String, module:model/MozuAppDevContractsLocalizedImage>} images
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['images'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuAppDevContractsAppStoreLocalizedProfile.prototype['auditInfo'] = undefined;






export default MozuAppDevContractsAppStoreLocalizedProfile;
