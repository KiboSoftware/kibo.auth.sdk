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
 * The MozuCoreApiContractsUserScope model module.
 * @module model/MozuCoreApiContractsUserScope
 * @version v1
 */
class MozuCoreApiContractsUserScope {
    /**
     * Constructs a new <code>MozuCoreApiContractsUserScope</code>.
     * @alias module:model/MozuCoreApiContractsUserScope
     */
    constructor() { 
        
        MozuCoreApiContractsUserScope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuCoreApiContractsUserScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuCoreApiContractsUserScope} obj Optional instance to populate.
     * @return {module:model/MozuCoreApiContractsUserScope} The populated <code>MozuCoreApiContractsUserScope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuCoreApiContractsUserScope();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
MozuCoreApiContractsUserScope.prototype['type'] = undefined;

/**
 * @member {Number} id
 */
MozuCoreApiContractsUserScope.prototype['id'] = undefined;

/**
 * @member {String} name
 */
MozuCoreApiContractsUserScope.prototype['name'] = undefined;






export default MozuCoreApiContractsUserScope;

