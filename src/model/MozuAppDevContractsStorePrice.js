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
 * The MozuAppDevContractsStorePrice model module.
 * @module model/MozuAppDevContractsStorePrice
 * @version v1
 */
class MozuAppDevContractsStorePrice {
    /**
     * Constructs a new <code>MozuAppDevContractsStorePrice</code>.
     * @alias module:model/MozuAppDevContractsStorePrice
     */
    constructor() { 
        
        MozuAppDevContractsStorePrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsStorePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsStorePrice} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsStorePrice} The populated <code>MozuAppDevContractsStorePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsStorePrice();

            if (data.hasOwnProperty('isoCurrencyCode')) {
                obj['isoCurrencyCode'] = ApiClient.convertToType(data['isoCurrencyCode'], 'String');
            }
            if (data.hasOwnProperty('salePrice')) {
                obj['salePrice'] = ApiClient.convertToType(data['salePrice'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('auditInfo')) {
                obj['auditInfo'] = MozuCoreApiContractsAuditInfo.constructFromObject(data['auditInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} isoCurrencyCode
 */
MozuAppDevContractsStorePrice.prototype['isoCurrencyCode'] = undefined;

/**
 * @member {Number} salePrice
 */
MozuAppDevContractsStorePrice.prototype['salePrice'] = undefined;

/**
 * @member {Number} price
 */
MozuAppDevContractsStorePrice.prototype['price'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsAuditInfo} auditInfo
 */
MozuAppDevContractsStorePrice.prototype['auditInfo'] = undefined;






export default MozuAppDevContractsStorePrice;
