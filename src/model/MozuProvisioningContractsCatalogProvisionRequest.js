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
 * The MozuProvisioningContractsCatalogProvisionRequest model module.
 * @module model/MozuProvisioningContractsCatalogProvisionRequest
 * @version v1
 */
class MozuProvisioningContractsCatalogProvisionRequest {
    /**
     * Constructs a new <code>MozuProvisioningContractsCatalogProvisionRequest</code>.
     * @alias module:model/MozuProvisioningContractsCatalogProvisionRequest
     */
    constructor() { 
        
        MozuProvisioningContractsCatalogProvisionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuProvisioningContractsCatalogProvisionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuProvisioningContractsCatalogProvisionRequest} obj Optional instance to populate.
     * @return {module:model/MozuProvisioningContractsCatalogProvisionRequest} The populated <code>MozuProvisioningContractsCatalogProvisionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuProvisioningContractsCatalogProvisionRequest();

            if (data.hasOwnProperty('isOverride')) {
                obj['isOverride'] = ApiClient.convertToType(data['isOverride'], 'Boolean');
            }
            if (data.hasOwnProperty('isRetry')) {
                obj['isRetry'] = ApiClient.convertToType(data['isRetry'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('masterCatalogId')) {
                obj['masterCatalogId'] = ApiClient.convertToType(data['masterCatalogId'], 'Number');
            }
            if (data.hasOwnProperty('catalogId')) {
                obj['catalogId'] = ApiClient.convertToType(data['catalogId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('defaultLocaleCode')) {
                obj['defaultLocaleCode'] = ApiClient.convertToType(data['defaultLocaleCode'], 'String');
            }
            if (data.hasOwnProperty('defaultCurrencyCode')) {
                obj['defaultCurrencyCode'] = ApiClient.convertToType(data['defaultCurrencyCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isOverride
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['isOverride'] = undefined;

/**
 * @member {Boolean} isRetry
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['isRetry'] = undefined;

/**
 * @member {Number} tenantId
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['tenantId'] = undefined;

/**
 * @member {Number} masterCatalogId
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['masterCatalogId'] = undefined;

/**
 * @member {Number} catalogId
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['catalogId'] = undefined;

/**
 * @member {String} name
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['name'] = undefined;

/**
 * @member {String} defaultLocaleCode
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['defaultLocaleCode'] = undefined;

/**
 * @member {String} defaultCurrencyCode
 */
MozuProvisioningContractsCatalogProvisionRequest.prototype['defaultCurrencyCode'] = undefined;






export default MozuProvisioningContractsCatalogProvisionRequest;

