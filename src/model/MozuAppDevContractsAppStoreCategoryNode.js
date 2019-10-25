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
import MozuAppDevContractsLocalizedCategory from './MozuAppDevContractsLocalizedCategory';

/**
 * The MozuAppDevContractsAppStoreCategoryNode model module.
 * @module model/MozuAppDevContractsAppStoreCategoryNode
 * @version v1
 */
class MozuAppDevContractsAppStoreCategoryNode {
    /**
     * Constructs a new <code>MozuAppDevContractsAppStoreCategoryNode</code>.
     * @alias module:model/MozuAppDevContractsAppStoreCategoryNode
     */
    constructor() { 
        
        MozuAppDevContractsAppStoreCategoryNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAppStoreCategoryNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAppStoreCategoryNode} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAppStoreCategoryNode} The populated <code>MozuAppDevContractsAppStoreCategoryNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAppStoreCategoryNode();

            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [MozuAppDevContractsAppStoreCategoryNode]);
            }
            if (data.hasOwnProperty('parentPath')) {
                obj['parentPath'] = ApiClient.convertToType(data['parentPath'], 'String');
            }
            if (data.hasOwnProperty('isFolder')) {
                obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
            }
            if (data.hasOwnProperty('hasChildren')) {
                obj['hasChildren'] = ApiClient.convertToType(data['hasChildren'], 'Boolean');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = MozuAppDevContractsLocalizedCategory.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [MozuAppDevContractsAppStoreCategoryNode]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} fullPath
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['fullPath'] = undefined;

/**
 * @member {String} name
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsAppStoreCategoryNode>} categories
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['categories'] = undefined;

/**
 * @member {String} parentPath
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['parentPath'] = undefined;

/**
 * @member {Boolean} isFolder
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['isFolder'] = undefined;

/**
 * @member {Boolean} hasChildren
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['hasChildren'] = undefined;

/**
 * @member {module:model/MozuAppDevContractsLocalizedCategory} content
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['content'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsAppStoreCategoryNode>} children
 */
MozuAppDevContractsAppStoreCategoryNode.prototype['children'] = undefined;






export default MozuAppDevContractsAppStoreCategoryNode;
