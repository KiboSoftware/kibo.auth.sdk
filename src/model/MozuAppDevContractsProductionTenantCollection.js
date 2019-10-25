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
import MozuAppDevContractsProductionTenant from './MozuAppDevContractsProductionTenant';

/**
 * The MozuAppDevContractsProductionTenantCollection model module.
 * @module model/MozuAppDevContractsProductionTenantCollection
 * @version v1
 */
class MozuAppDevContractsProductionTenantCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsProductionTenantCollection</code>.
     * @alias module:model/MozuAppDevContractsProductionTenantCollection
     */
    constructor() { 
        
        MozuAppDevContractsProductionTenantCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsProductionTenantCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsProductionTenantCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsProductionTenantCollection} The populated <code>MozuAppDevContractsProductionTenantCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsProductionTenantCollection();

            if (data.hasOwnProperty('startIndex')) {
                obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageCount')) {
                obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [MozuAppDevContractsProductionTenant]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} startIndex
 */
MozuAppDevContractsProductionTenantCollection.prototype['startIndex'] = undefined;

/**
 * @member {Number} pageSize
 */
MozuAppDevContractsProductionTenantCollection.prototype['pageSize'] = undefined;

/**
 * @member {Number} pageCount
 */
MozuAppDevContractsProductionTenantCollection.prototype['pageCount'] = undefined;

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsProductionTenantCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsProductionTenant>} items
 */
MozuAppDevContractsProductionTenantCollection.prototype['items'] = undefined;






export default MozuAppDevContractsProductionTenantCollection;

