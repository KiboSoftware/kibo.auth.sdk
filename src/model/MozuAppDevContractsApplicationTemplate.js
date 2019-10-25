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
 * The MozuAppDevContractsApplicationTemplate model module.
 * @module model/MozuAppDevContractsApplicationTemplate
 * @version v1
 */
class MozuAppDevContractsApplicationTemplate {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationTemplate</code>.
     * @alias module:model/MozuAppDevContractsApplicationTemplate
     */
    constructor() { 
        
        MozuAppDevContractsApplicationTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationTemplate} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationTemplate} The populated <code>MozuAppDevContractsApplicationTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationTemplate();

            if (data.hasOwnProperty('applicationTemplateId')) {
                obj['applicationTemplateId'] = ApiClient.convertToType(data['applicationTemplateId'], 'Number');
            }
            if (data.hasOwnProperty('applicationTemplateName')) {
                obj['applicationTemplateName'] = ApiClient.convertToType(data['applicationTemplateName'], 'String');
            }
            if (data.hasOwnProperty('applicationTemplateTypeId')) {
                obj['applicationTemplateTypeId'] = ApiClient.convertToType(data['applicationTemplateTypeId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('versionDescription')) {
                obj['versionDescription'] = ApiClient.convertToType(data['versionDescription'], 'String');
            }
            if (data.hasOwnProperty('versionExtendsApplication')) {
                obj['versionExtendsApplication'] = ApiClient.convertToType(data['versionExtendsApplication'], 'Number');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('applicationName')) {
                obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
            }
            if (data.hasOwnProperty('developerAccountId')) {
                obj['developerAccountId'] = ApiClient.convertToType(data['developerAccountId'], 'Number');
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
            if (data.hasOwnProperty('applicationTypeId')) {
                obj['applicationTypeId'] = ApiClient.convertToType(data['applicationTypeId'], 'Number');
            }
            if (data.hasOwnProperty('isMaster')) {
                obj['isMaster'] = ApiClient.convertToType(data['isMaster'], 'Boolean');
            }
            if (data.hasOwnProperty('templateDescription')) {
                obj['templateDescription'] = ApiClient.convertToType(data['templateDescription'], 'String');
            }
            if (data.hasOwnProperty('heroImage')) {
                obj['heroImage'] = ApiClient.convertToType(data['heroImage'], 'String');
            }
            if (data.hasOwnProperty('isGlobal')) {
                obj['isGlobal'] = ApiClient.convertToType(data['isGlobal'], 'Boolean');
            }
            if (data.hasOwnProperty('releasePackageId')) {
                obj['releasePackageId'] = ApiClient.convertToType(data['releasePackageId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationTemplateId
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationTemplateId'] = undefined;

/**
 * @member {String} applicationTemplateName
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationTemplateName'] = undefined;

/**
 * @member {Number} applicationTemplateTypeId
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationTemplateTypeId'] = undefined;

/**
 * @member {Number} applicationId
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationId'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
MozuAppDevContractsApplicationTemplate.prototype['isDeleted'] = undefined;

/**
 * @member {String} versionDescription
 */
MozuAppDevContractsApplicationTemplate.prototype['versionDescription'] = undefined;

/**
 * @member {Number} versionExtendsApplication
 */
MozuAppDevContractsApplicationTemplate.prototype['versionExtendsApplication'] = undefined;

/**
 * @member {String} appId
 */
MozuAppDevContractsApplicationTemplate.prototype['appId'] = undefined;

/**
 * @member {String} applicationName
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationName'] = undefined;

/**
 * @member {Number} developerAccountId
 */
MozuAppDevContractsApplicationTemplate.prototype['developerAccountId'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuAppDevContractsApplicationTemplate.prototype['auditInfo'] = undefined;

/**
 * @member {Number} applicationTypeId
 */
MozuAppDevContractsApplicationTemplate.prototype['applicationTypeId'] = undefined;

/**
 * @member {Boolean} isMaster
 */
MozuAppDevContractsApplicationTemplate.prototype['isMaster'] = undefined;

/**
 * @member {String} templateDescription
 */
MozuAppDevContractsApplicationTemplate.prototype['templateDescription'] = undefined;

/**
 * @member {String} heroImage
 */
MozuAppDevContractsApplicationTemplate.prototype['heroImage'] = undefined;

/**
 * @member {Boolean} isGlobal
 */
MozuAppDevContractsApplicationTemplate.prototype['isGlobal'] = undefined;

/**
 * @member {Number} releasePackageId
 */
MozuAppDevContractsApplicationTemplate.prototype['releasePackageId'] = undefined;






export default MozuAppDevContractsApplicationTemplate;
