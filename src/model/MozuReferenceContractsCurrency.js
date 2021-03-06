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
 * The MozuReferenceContractsCurrency model module.
 * @module model/MozuReferenceContractsCurrency
 * @version v1
 */
class MozuReferenceContractsCurrency {
    /**
     * Constructs a new <code>MozuReferenceContractsCurrency</code>.
     * @alias module:model/MozuReferenceContractsCurrency
     */
    constructor() { 
        
        MozuReferenceContractsCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuReferenceContractsCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuReferenceContractsCurrency} obj Optional instance to populate.
     * @return {module:model/MozuReferenceContractsCurrency} The populated <code>MozuReferenceContractsCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuReferenceContractsCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
MozuReferenceContractsCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
MozuReferenceContractsCurrency.prototype['name'] = undefined;






export default MozuReferenceContractsCurrency;

