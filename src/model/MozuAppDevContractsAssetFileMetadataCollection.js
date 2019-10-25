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
import MozuAppDevContractsAssetFileMetadata from './MozuAppDevContractsAssetFileMetadata';

/**
 * The MozuAppDevContractsAssetFileMetadataCollection model module.
 * @module model/MozuAppDevContractsAssetFileMetadataCollection
 * @version v1
 */
class MozuAppDevContractsAssetFileMetadataCollection {
    /**
     * Constructs a new <code>MozuAppDevContractsAssetFileMetadataCollection</code>.
     * @alias module:model/MozuAppDevContractsAssetFileMetadataCollection
     */
    constructor() { 
        
        MozuAppDevContractsAssetFileMetadataCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAssetFileMetadataCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAssetFileMetadataCollection} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAssetFileMetadataCollection} The populated <code>MozuAppDevContractsAssetFileMetadataCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAssetFileMetadataCollection();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [MozuAppDevContractsAssetFileMetadata]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalCount
 */
MozuAppDevContractsAssetFileMetadataCollection.prototype['totalCount'] = undefined;

/**
 * @member {Array.<module:model/MozuAppDevContractsAssetFileMetadata>} items
 */
MozuAppDevContractsAssetFileMetadataCollection.prototype['items'] = undefined;






export default MozuAppDevContractsAssetFileMetadataCollection;

