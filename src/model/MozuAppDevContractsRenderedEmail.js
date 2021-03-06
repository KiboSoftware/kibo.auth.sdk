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
 * The MozuAppDevContractsRenderedEmail model module.
 * @module model/MozuAppDevContractsRenderedEmail
 * @version v1
 */
class MozuAppDevContractsRenderedEmail {
    /**
     * Constructs a new <code>MozuAppDevContractsRenderedEmail</code>.
     * @alias module:model/MozuAppDevContractsRenderedEmail
     */
    constructor() { 
        
        MozuAppDevContractsRenderedEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsRenderedEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsRenderedEmail} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsRenderedEmail} The populated <code>MozuAppDevContractsRenderedEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsRenderedEmail();

            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} subject
 */
MozuAppDevContractsRenderedEmail.prototype['subject'] = undefined;

/**
 * @member {String} body
 */
MozuAppDevContractsRenderedEmail.prototype['body'] = undefined;






export default MozuAppDevContractsRenderedEmail;

