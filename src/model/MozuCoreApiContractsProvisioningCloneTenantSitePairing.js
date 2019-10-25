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
 * The MozuCoreApiContractsProvisioningCloneTenantSitePairing model module.
 * @module model/MozuCoreApiContractsProvisioningCloneTenantSitePairing
 * @version v1
 */
class MozuCoreApiContractsProvisioningCloneTenantSitePairing {
    /**
     * Constructs a new <code>MozuCoreApiContractsProvisioningCloneTenantSitePairing</code>.
     * @alias module:model/MozuCoreApiContractsProvisioningCloneTenantSitePairing
     */
    constructor() { 
        
        MozuCoreApiContractsProvisioningCloneTenantSitePairing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuCoreApiContractsProvisioningCloneTenantSitePairing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuCoreApiContractsProvisioningCloneTenantSitePairing} obj Optional instance to populate.
     * @return {module:model/MozuCoreApiContractsProvisioningCloneTenantSitePairing} The populated <code>MozuCoreApiContractsProvisioningCloneTenantSitePairing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuCoreApiContractsProvisioningCloneTenantSitePairing();

            if (data.hasOwnProperty('sourceSiteId')) {
                obj['sourceSiteId'] = ApiClient.convertToType(data['sourceSiteId'], 'Number');
            }
            if (data.hasOwnProperty('targetSiteId')) {
                obj['targetSiteId'] = ApiClient.convertToType(data['targetSiteId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} sourceSiteId
 */
MozuCoreApiContractsProvisioningCloneTenantSitePairing.prototype['sourceSiteId'] = undefined;

/**
 * @member {Number} targetSiteId
 */
MozuCoreApiContractsProvisioningCloneTenantSitePairing.prototype['targetSiteId'] = undefined;






export default MozuCoreApiContractsProvisioningCloneTenantSitePairing;

