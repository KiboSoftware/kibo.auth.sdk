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
 * The MozuCoreApiContractsProvisioningDeleteSiteRequest model module.
 * @module model/MozuCoreApiContractsProvisioningDeleteSiteRequest
 * @version v1
 */
class MozuCoreApiContractsProvisioningDeleteSiteRequest {
    /**
     * Constructs a new <code>MozuCoreApiContractsProvisioningDeleteSiteRequest</code>.
     * @alias module:model/MozuCoreApiContractsProvisioningDeleteSiteRequest
     */
    constructor() { 
        
        MozuCoreApiContractsProvisioningDeleteSiteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuCoreApiContractsProvisioningDeleteSiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuCoreApiContractsProvisioningDeleteSiteRequest} obj Optional instance to populate.
     * @return {module:model/MozuCoreApiContractsProvisioningDeleteSiteRequest} The populated <code>MozuCoreApiContractsProvisioningDeleteSiteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuCoreApiContractsProvisioningDeleteSiteRequest();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} tenantId
 */
MozuCoreApiContractsProvisioningDeleteSiteRequest.prototype['tenantId'] = undefined;

/**
 * @member {Number} siteId
 */
MozuCoreApiContractsProvisioningDeleteSiteRequest.prototype['siteId'] = undefined;






export default MozuCoreApiContractsProvisioningDeleteSiteRequest;

