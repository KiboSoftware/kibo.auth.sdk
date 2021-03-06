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
 * The MozuAppDevContractsEventCategory model module.
 * @module model/MozuAppDevContractsEventCategory
 * @version v1
 */
class MozuAppDevContractsEventCategory {
    /**
     * Constructs a new <code>MozuAppDevContractsEventCategory</code>.
     * @alias module:model/MozuAppDevContractsEventCategory
     */
    constructor() { 
        
        MozuAppDevContractsEventCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsEventCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsEventCategory} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsEventCategory} The populated <code>MozuAppDevContractsEventCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsEventCategory();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('apiVersionNumber')) {
                obj['apiVersionNumber'] = ApiClient.convertToType(data['apiVersionNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
MozuAppDevContractsEventCategory.prototype['name'] = undefined;

/**
 * @member {String} apiVersionNumber
 */
MozuAppDevContractsEventCategory.prototype['apiVersionNumber'] = undefined;






export default MozuAppDevContractsEventCategory;

