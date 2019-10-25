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
import MozuCoreApiContractsUserScope from './MozuCoreApiContractsUserScope';

/**
 * The MozuCoreApiContractsUserRole model module.
 * @module model/MozuCoreApiContractsUserRole
 * @version v1
 */
class MozuCoreApiContractsUserRole {
    /**
     * Constructs a new <code>MozuCoreApiContractsUserRole</code>.
     * @alias module:model/MozuCoreApiContractsUserRole
     */
    constructor() { 
        
        MozuCoreApiContractsUserRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuCoreApiContractsUserRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuCoreApiContractsUserRole} obj Optional instance to populate.
     * @return {module:model/MozuCoreApiContractsUserRole} The populated <code>MozuCoreApiContractsUserRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuCoreApiContractsUserRole();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('assignedInScope')) {
                obj['assignedInScope'] = MozuCoreApiContractsUserScope.constructFromObject(data['assignedInScope']);
            }
            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Number');
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} userId
 */
MozuCoreApiContractsUserRole.prototype['userId'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsUserScope} assignedInScope
 */
MozuCoreApiContractsUserRole.prototype['assignedInScope'] = undefined;

/**
 * @member {Number} roleId
 */
MozuCoreApiContractsUserRole.prototype['roleId'] = undefined;

/**
 * @member {String} roleName
 */
MozuCoreApiContractsUserRole.prototype['roleName'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuCoreApiContractsUserRole.prototype['auditInfo'] = undefined;






export default MozuCoreApiContractsUserRole;
