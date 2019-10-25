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
 * The MozuAppDevContractsAttributeVocabularyValue model module.
 * @module model/MozuAppDevContractsAttributeVocabularyValue
 * @version v1
 */
class MozuAppDevContractsAttributeVocabularyValue {
    /**
     * Constructs a new <code>MozuAppDevContractsAttributeVocabularyValue</code>.
     * @alias module:model/MozuAppDevContractsAttributeVocabularyValue
     */
    constructor() { 
        
        MozuAppDevContractsAttributeVocabularyValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAttributeVocabularyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAttributeVocabularyValue} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAttributeVocabularyValue} The populated <code>MozuAppDevContractsAttributeVocabularyValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAttributeVocabularyValue();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
MozuAppDevContractsAttributeVocabularyValue.prototype['value'] = undefined;

/**
 * @member {Number} sequence
 */
MozuAppDevContractsAttributeVocabularyValue.prototype['sequence'] = undefined;






export default MozuAppDevContractsAttributeVocabularyValue;

