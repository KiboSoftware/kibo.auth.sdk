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
 * The MozuAppDevContractsValidationItem model module.
 * @module model/MozuAppDevContractsValidationItem
 * @version v1
 */
class MozuAppDevContractsValidationItem {
    /**
     * Constructs a new <code>MozuAppDevContractsValidationItem</code>.
     * @alias module:model/MozuAppDevContractsValidationItem
     */
    constructor() { 
        
        MozuAppDevContractsValidationItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsValidationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsValidationItem} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsValidationItem} The populated <code>MozuAppDevContractsValidationItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsValidationItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('hashtag')) {
                obj['hashtag'] = ApiClient.convertToType(data['hashtag'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('helpUrl')) {
                obj['helpUrl'] = ApiClient.convertToType(data['helpUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
MozuAppDevContractsValidationItem.prototype['id'] = undefined;

/**
 * @member {String} type
 */
MozuAppDevContractsValidationItem.prototype['type'] = undefined;

/**
 * @member {String} hashtag
 */
MozuAppDevContractsValidationItem.prototype['hashtag'] = undefined;

/**
 * @member {String} severity
 */
MozuAppDevContractsValidationItem.prototype['severity'] = undefined;

/**
 * @member {String} message
 */
MozuAppDevContractsValidationItem.prototype['message'] = undefined;

/**
 * @member {String} helpUrl
 */
MozuAppDevContractsValidationItem.prototype['helpUrl'] = undefined;






export default MozuAppDevContractsValidationItem;

