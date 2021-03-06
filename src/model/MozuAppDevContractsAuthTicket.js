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
 * The MozuAppDevContractsAuthTicket model module.
 * @module model/MozuAppDevContractsAuthTicket
 * @version v1
 */
class MozuAppDevContractsAuthTicket {
    /**
     * Constructs a new <code>MozuAppDevContractsAuthTicket</code>.
     * @alias module:model/MozuAppDevContractsAuthTicket
     */
    constructor() { 
        
        MozuAppDevContractsAuthTicket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsAuthTicket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsAuthTicket} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsAuthTicket} The populated <code>MozuAppDevContractsAuthTicket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsAuthTicket();

            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('accessTokenExpiration')) {
                obj['accessTokenExpiration'] = ApiClient.convertToType(data['accessTokenExpiration'], 'Date');
            }
            if (data.hasOwnProperty('refreshTokenExpiration')) {
                obj['refreshTokenExpiration'] = ApiClient.convertToType(data['refreshTokenExpiration'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} refreshToken
 */
MozuAppDevContractsAuthTicket.prototype['refreshToken'] = undefined;

/**
 * @member {String} accessToken
 */
MozuAppDevContractsAuthTicket.prototype['accessToken'] = undefined;

/**
 * @member {Date} accessTokenExpiration
 */
MozuAppDevContractsAuthTicket.prototype['accessTokenExpiration'] = undefined;

/**
 * @member {Date} refreshTokenExpiration
 */
MozuAppDevContractsAuthTicket.prototype['refreshTokenExpiration'] = undefined;






export default MozuAppDevContractsAuthTicket;

