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
import MozuAppDevContractsDevAccountMember from './MozuAppDevContractsDevAccountMember';

/**
 * The MozuAppDevContractsDevAccountMemberCollection model module.
 * @module model/MozuAppDevContractsDevAccountMemberCollection
 * @version v1
 */
class MozuAppDevContractsDevAccountMemberCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsDevAccountMemberCollection</code>.
     * @alias module:model/MozuAppDevContractsDevAccountMemberCollection
     */
    constructor() { 
        
        MozuAppDevContractsDevAccountMemberCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsDevAccountMemberCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsDevAccountMemberCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsDevAccountMemberCollection} The populated <code>MozuAppDevContractsDevAccountMemberCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsDevAccountMemberCollection();

            if (data.hasOwnProperty('startIndex')) {
                obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageCount')) {
                obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [MozuAppDevContractsDevAccountMember]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} startIndex
 */
MozuAppDevContractsDevAccountMemberCollection.prototype['startIndex'] = undefined;

/**
 * @member {Number} pageSize
 */
MozuAppDevContractsDevAccountMemberCollection.prototype['pageSize'] = undefined;

/**
 * @member {Number} pageCount
 */
MozuAppDevContractsDevAccountMemberCollection.prototype['pageCount'] = undefined;

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsDevAccountMemberCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsDevAccountMember>} items
 */
MozuAppDevContractsDevAccountMemberCollection.prototype['items'] = undefined;






export default MozuAppDevContractsDevAccountMemberCollection;

