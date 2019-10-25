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
import MozuAppDevContractsAttributeSubscription from './MozuAppDevContractsAttributeSubscription';

/**
 * The MozuAppDevContractsAttributeDefinitionRequest model module.
 * @module model/MozuAppDevContractsAttributeDefinitionRequest
 * @version v1
 */
class MozuAppDevContractsAttributeDefinitionRequest {
    /**
     * Constructs a new <code>MozuAppDevContractsAttributeDefinitionRequest</code>.
     * @alias module:model/MozuAppDevContractsAttributeDefinitionRequest
     */
    constructor() { 
        
        MozuAppDevContractsAttributeDefinitionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAttributeDefinitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAttributeDefinitionRequest} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAttributeDefinitionRequest} The populated <code>MozuAppDevContractsAttributeDefinitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAttributeDefinitionRequest();

            if (data.hasOwnProperty('packageId')) {
                obj['packageId'] = ApiClient.convertToType(data['packageId'], 'Number');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('masterCatalogId')) {
                obj['masterCatalogId'] = ApiClient.convertToType(data['masterCatalogId'], 'Number');
            }
            if (data.hasOwnProperty('attributeSubscriptions')) {
                obj['attributeSubscriptions'] = ApiClient.convertToType(data['attributeSubscriptions'], [MozuAppDevContractsAttributeSubscription]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} packageId
 */
MozuAppDevContractsAttributeDefinitionRequest.prototype['packageId'] = undefined;

/**
 * @member {Number} tenantId
 */
MozuAppDevContractsAttributeDefinitionRequest.prototype['tenantId'] = undefined;

/**
 * @member {Number} masterCatalogId
 */
MozuAppDevContractsAttributeDefinitionRequest.prototype['masterCatalogId'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsAttributeSubscription>} attributeSubscriptions
 */
MozuAppDevContractsAttributeDefinitionRequest.prototype['attributeSubscriptions'] = undefined;






export default MozuAppDevContractsAttributeDefinitionRequest;
