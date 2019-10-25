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
import MozuAppDevContractsBehaviorCategoryBehavior from './MozuAppDevContractsBehaviorCategoryBehavior';

/**
 * The MozuAppDevContractsBehaviorCategoryBehaviorCollection model module.
 * @module model/MozuAppDevContractsBehaviorCategoryBehaviorCollection
 * @version v1
 */
class MozuAppDevContractsBehaviorCategoryBehaviorCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsBehaviorCategoryBehaviorCollection</code>.
     * @alias module:model/MozuAppDevContractsBehaviorCategoryBehaviorCollection
     */
    constructor() { 
        
        MozuAppDevContractsBehaviorCategoryBehaviorCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsBehaviorCategoryBehaviorCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsBehaviorCategoryBehaviorCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsBehaviorCategoryBehaviorCollection} The populated <code>MozuAppDevContractsBehaviorCategoryBehaviorCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsBehaviorCategoryBehaviorCollection();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [MozuAppDevContractsBehaviorCategoryBehavior]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsBehaviorCategoryBehaviorCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsBehaviorCategoryBehavior>} items
 */
MozuAppDevContractsBehaviorCategoryBehaviorCollection.prototype['items'] = undefined;






export default MozuAppDevContractsBehaviorCategoryBehaviorCollection;

