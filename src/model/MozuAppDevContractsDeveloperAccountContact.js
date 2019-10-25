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
import MozuCoreApiContractsContact from './MozuCoreApiContractsContact';

/**
 * The MozuAppDevContractsDeveloperAccountContact model module.
 * @module model/MozuAppDevContractsDeveloperAccountContact
 * @version v1
 */
class MozuAppDevContractsDeveloperAccountContact {
    /**
     * Constructs a new <code>MozuAppDevContractsDeveloperAccountContact</code>.
     * @alias module:model/MozuAppDevContractsDeveloperAccountContact
     */
    constructor() { 
        
        MozuAppDevContractsDeveloperAccountContact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsDeveloperAccountContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsDeveloperAccountContact} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsDeveloperAccountContact} The populated <code>MozuAppDevContractsDeveloperAccountContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsDeveloperAccountContact();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = MozuCoreApiContractsContact.constructFromObject(data['contact']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
MozuAppDevContractsDeveloperAccountContact.prototype['type'] = undefined;

/**
 * @member {module:model/MozuCoreApiContractsContact} contact
 */
MozuAppDevContractsDeveloperAccountContact.prototype['contact'] = undefined;






export default MozuAppDevContractsDeveloperAccountContact;

