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
 * The MozuAppDevContractsApplicationCapabilityView model module.
 * @module model/MozuAppDevContractsApplicationCapabilityView
 * @version v1
 */
class MozuAppDevContractsApplicationCapabilityView {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationCapabilityView</code>.
     * @alias module:model/MozuAppDevContractsApplicationCapabilityView
     */
    constructor() { 
        
        MozuAppDevContractsApplicationCapabilityView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationCapabilityView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationCapabilityView} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationCapabilityView} The populated <code>MozuAppDevContractsApplicationCapabilityView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationCapabilityView();

            if (data.hasOwnProperty('applicationCapabilityId')) {
                obj['applicationCapabilityId'] = ApiClient.convertToType(data['applicationCapabilityId'], 'Number');
            }
            if (data.hasOwnProperty('capabilityTypeContractId')) {
                obj['capabilityTypeContractId'] = ApiClient.convertToType(data['capabilityTypeContractId'], 'Number');
            }
            if (data.hasOwnProperty('applicationEndPoint')) {
                obj['applicationEndPoint'] = ApiClient.convertToType(data['applicationEndPoint'], 'String');
            }
            if (data.hasOwnProperty('contractName')) {
                obj['contractName'] = ApiClient.convertToType(data['contractName'], 'String');
            }
            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
            if (data.hasOwnProperty('packageId')) {
                obj['packageId'] = ApiClient.convertToType(data['packageId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} applicationCapabilityId
 */
MozuAppDevContractsApplicationCapabilityView.prototype['applicationCapabilityId'] = undefined;

/**
 * @member {Number} capabilityTypeContractId
 */
MozuAppDevContractsApplicationCapabilityView.prototype['capabilityTypeContractId'] = undefined;

/**
 * @member {String} applicationEndPoint
 */
MozuAppDevContractsApplicationCapabilityView.prototype['applicationEndPoint'] = undefined;

/**
 * @member {String} contractName
 */
MozuAppDevContractsApplicationCapabilityView.prototype['contractName'] = undefined;

/**
 * @member {String} verb
 */
MozuAppDevContractsApplicationCapabilityView.prototype['verb'] = undefined;

/**
 * @member {Number} packageId
 */
MozuAppDevContractsApplicationCapabilityView.prototype['packageId'] = undefined;






export default MozuAppDevContractsApplicationCapabilityView;

