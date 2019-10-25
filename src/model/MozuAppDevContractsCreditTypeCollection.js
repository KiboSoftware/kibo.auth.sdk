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
import MozuAppDevContractsCreditType from './MozuAppDevContractsCreditType';

/**
 * The MozuAppDevContractsCreditTypeCollection model module.
 * @module model/MozuAppDevContractsCreditTypeCollection
 * @version v1
 */
class MozuAppDevContractsCreditTypeCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsCreditTypeCollection</code>.
     * @alias module:model/MozuAppDevContractsCreditTypeCollection
     */
    constructor() { 
        
        MozuAppDevContractsCreditTypeCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsCreditTypeCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsCreditTypeCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsCreditTypeCollection} The populated <code>MozuAppDevContractsCreditTypeCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsCreditTypeCollection();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [MozuAppDevContractsCreditType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsCreditTypeCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsCreditType>} items
 */
MozuAppDevContractsCreditTypeCollection.prototype['items'] = undefined;






export default MozuAppDevContractsCreditTypeCollection;

