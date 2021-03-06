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
 * The MozuAppDevContractsPublicApplicationVersionsCollection model module.
 * @module model/MozuAppDevContractsPublicApplicationVersionsCollection
 * @version v1
 */
class MozuAppDevContractsPublicApplicationVersionsCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsPublicApplicationVersionsCollection</code>.
     * @alias module:model/MozuAppDevContractsPublicApplicationVersionsCollection
     */
    constructor() { 
        
        MozuAppDevContractsPublicApplicationVersionsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsPublicApplicationVersionsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsPublicApplicationVersionsCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsPublicApplicationVersionsCollection} The populated <code>MozuAppDevContractsPublicApplicationVersionsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsPublicApplicationVersionsCollection();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsPublicApplicationVersionsCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<String>} items
 */
MozuAppDevContractsPublicApplicationVersionsCollection.prototype['items'] = undefined;






export default MozuAppDevContractsPublicApplicationVersionsCollection;

