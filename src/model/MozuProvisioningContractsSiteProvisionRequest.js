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
import MozuCoreApiContractsProvisioningCreateCatalogRequest from './MozuCoreApiContractsProvisioningCreateCatalogRequest';
import MozuCoreApiContractsProvisioningCreateCustomDomainRequest from './MozuCoreApiContractsProvisioningCreateCustomDomainRequest';

/**
 * The MozuProvisioningContractsSiteProvisionRequest model module.
 * @module model/MozuProvisioningContractsSiteProvisionRequest
 * @version v1
 */
class MozuProvisioningContractsSiteProvisionRequest {
    /**
     * Constructs a new <code>MozuProvisioningContractsSiteProvisionRequest</code>.
     * @alias module:model/MozuProvisioningContractsSiteProvisionRequest
     */
    constructor() { 
        
        MozuProvisioningContractsSiteProvisionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuProvisioningContractsSiteProvisionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuProvisioningContractsSiteProvisionRequest} obj Optional instance to populate.
     * @return {module:model/MozuProvisioningContractsSiteProvisionRequest} The populated <code>MozuProvisioningContractsSiteProvisionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuProvisioningContractsSiteProvisionRequest();

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
            if (data.hasOwnProperty('catalogRequest')) {
                obj['catalogRequest'] = MozuCoreApiContractsProvisioningCreateCatalogRequest.constructFromObject(data['catalogRequest']);
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('localeCode')) {
                obj['localeCode'] = ApiClient.convertToType(data['localeCode'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], [MozuCoreApiContractsProvisioningCreateCustomDomainRequest]);
            }
            if (data.hasOwnProperty('isMozuStorefront')) {
                obj['isMozuStorefront'] = ApiClient.convertToType(data['isMozuStorefront'], 'Boolean');
            }
            if (data.hasOwnProperty('omsCatalogId')) {
                obj['omsCatalogId'] = ApiClient.convertToType(data['omsCatalogId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isOverride
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['isOverride'] = undefined;

/**
 * @member {Boolean} isRetry
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['isRetry'] = undefined;

/**
 * @member {Number} tenantId
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['tenantId'] = undefined;

/**
 * @member {Number} masterCatalogId
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['masterCatalogId'] = undefined;

/**
 * @member {Number} catalogId
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['catalogId'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsProvisioningCreateCatalogRequest} catalogRequest
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['catalogRequest'] = undefined;

/**
 * @member {Number} siteId
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['siteId'] = undefined;

/**
 * @member {String} name
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['name'] = undefined;

/**
 * @member {String} localeCode
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['localeCode'] = undefined;

/**
 * @member {String} countryCode
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['countryCode'] = undefined;

/**
 * @member {String} currencyCode
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Array.<module:model/MozuCoreApiContractsProvisioningCreateCustomDomainRequest>} domains
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['domains'] = undefined;

/**
 * @member {Boolean} isMozuStorefront
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['isMozuStorefront'] = undefined;

/**
 * @member {Number} omsCatalogId
 */
MozuProvisioningContractsSiteProvisionRequest.prototype['omsCatalogId'] = undefined;






export default MozuProvisioningContractsSiteProvisionRequest;

