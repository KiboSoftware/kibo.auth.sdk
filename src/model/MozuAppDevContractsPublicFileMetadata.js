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
 * The MozuAppDevContractsPublicFileMetadata model module.
 * @module model/MozuAppDevContractsPublicFileMetadata
 * @version v1
 */
class MozuAppDevContractsPublicFileMetadata {
    /**
     * Constructs a new <code>MozuAppDevContractsPublicFileMetadata</code>.
     * @alias module:model/MozuAppDevContractsPublicFileMetadata
     */
    constructor() { 
        
        MozuAppDevContractsPublicFileMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsPublicFileMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsPublicFileMetadata} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsPublicFileMetadata} The populated <code>MozuAppDevContractsPublicFileMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsPublicFileMetadata();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('checkSum')) {
                obj['checkSum'] = ApiClient.convertToType(data['checkSum'], 'String');
            }
            if (data.hasOwnProperty('sizeInBytes')) {
                obj['sizeInBytes'] = ApiClient.convertToType(data['sizeInBytes'], 'Number');
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
MozuAppDevContractsPublicFileMetadata.prototype['id'] = undefined;

/**
 * @member {String} type
 */
MozuAppDevContractsPublicFileMetadata.prototype['type'] = undefined;

/**
 * @member {String} path
 */
MozuAppDevContractsPublicFileMetadata.prototype['path'] = undefined;

/**
 * @member {String} checkSum
 */
MozuAppDevContractsPublicFileMetadata.prototype['checkSum'] = undefined;

/**
 * @member {Number} sizeInBytes
 */
MozuAppDevContractsPublicFileMetadata.prototype['sizeInBytes'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuAppDevContractsPublicFileMetadata.prototype['auditInfo'] = undefined;






export default MozuAppDevContractsPublicFileMetadata;

