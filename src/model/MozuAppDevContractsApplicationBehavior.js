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
 * The MozuAppDevContractsApplicationBehavior model module.
 * @module model/MozuAppDevContractsApplicationBehavior
 * @version v1
 */
class MozuAppDevContractsApplicationBehavior {
    /**
     * Constructs a new <code>MozuAppDevContractsApplicationBehavior</code>.
     * @alias module:model/MozuAppDevContractsApplicationBehavior
     */
    constructor() { 
        
        MozuAppDevContractsApplicationBehavior.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsApplicationBehavior</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsApplicationBehavior} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsApplicationBehavior} The populated <code>MozuAppDevContractsApplicationBehavior</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsApplicationBehavior();

            if (data.hasOwnProperty('behaviorId')) {
                obj['behaviorId'] = ApiClient.convertToType(data['behaviorId'], 'Number');
            }
            if (data.hasOwnProperty('packageId')) {
                obj['packageId'] = ApiClient.convertToType(data['packageId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} behaviorId
 */
MozuAppDevContractsApplicationBehavior.prototype['behaviorId'] = undefined;

/**
 * @member {Number} packageId
 */
MozuAppDevContractsApplicationBehavior.prototype['packageId'] = undefined;






export default MozuAppDevContractsApplicationBehavior;

