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
 * The MozuAppDevContractsDevAccountProdTenant model module.
 * @module model/MozuAppDevContractsDevAccountProdTenant
 * @version v1
 */
class MozuAppDevContractsDevAccountProdTenant {
    /**
     * Constructs a new <code>MozuAppDevContractsDevAccountProdTenant</code>.
     * @alias module:model/MozuAppDevContractsDevAccountProdTenant
     */
    constructor() { 
        
        MozuAppDevContractsDevAccountProdTenant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsDevAccountProdTenant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsDevAccountProdTenant} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsDevAccountProdTenant} The populated <code>MozuAppDevContractsDevAccountProdTenant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsDevAccountProdTenant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('developerAccountId')) {
                obj['developerAccountId'] = ApiClient.convertToType(data['developerAccountId'], 'Number');
            }
            if (data.hasOwnProperty('productionTenantId')) {
                obj['productionTenantId'] = ApiClient.convertToType(data['productionTenantId'], 'Number');
            }
            if (data.hasOwnProperty('beginDate')) {
                obj['beginDate'] = ApiClient.convertToType(data['beginDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MozuAppDevContractsDevAccountProdTenant.prototype['id'] = undefined;

/**
 * @member {Number} developerAccountId
 */
MozuAppDevContractsDevAccountProdTenant.prototype['developerAccountId'] = undefined;

/**
 * @member {Number} productionTenantId
 */
MozuAppDevContractsDevAccountProdTenant.prototype['productionTenantId'] = undefined;

/**
 * @member {Date} beginDate
 */
MozuAppDevContractsDevAccountProdTenant.prototype['beginDate'] = undefined;

/**
 * @member {Date} endDate
 */
MozuAppDevContractsDevAccountProdTenant.prototype['endDate'] = undefined;






export default MozuAppDevContractsDevAccountProdTenant;

