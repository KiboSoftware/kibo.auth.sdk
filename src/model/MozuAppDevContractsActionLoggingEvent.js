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
 * The MozuAppDevContractsActionLoggingEvent model module.
 * @module model/MozuAppDevContractsActionLoggingEvent
 * @version v1
 */
class MozuAppDevContractsActionLoggingEvent {
    /**
     * Constructs a new <code>MozuAppDevContractsActionLoggingEvent</code>.
     * @alias module:model/MozuAppDevContractsActionLoggingEvent
     */
    constructor() { 
        
        MozuAppDevContractsActionLoggingEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsActionLoggingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsActionLoggingEvent} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsActionLoggingEvent} The populated <code>MozuAppDevContractsActionLoggingEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsActionLoggingEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('correlationId')) {
                obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
            }
            if (data.hasOwnProperty('apiContext')) {
                obj['apiContext'] = ApiClient.convertToType(data['apiContext'], 'String');
            }
            if (data.hasOwnProperty('applicationName')) {
                obj['applicationName'] = ApiClient.convertToType(data['applicationName'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'String');
            }
            if (data.hasOwnProperty('applicationKey')) {
                obj['applicationKey'] = ApiClient.convertToType(data['applicationKey'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('fullMessage')) {
                obj['fullMessage'] = ApiClient.convertToType(data['fullMessage'], 'String');
            }
            if (data.hasOwnProperty('scaleUnit')) {
                obj['scaleUnit'] = ApiClient.convertToType(data['scaleUnit'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'Number');
            }
            if (data.hasOwnProperty('functionId')) {
                obj['functionId'] = ApiClient.convertToType(data['functionId'], 'String');
            }
            if (data.hasOwnProperty('actionId')) {
                obj['actionId'] = ApiClient.convertToType(data['actionId'], 'String');
            }
            if (data.hasOwnProperty('actionDomain')) {
                obj['actionDomain'] = ApiClient.convertToType(data['actionDomain'], 'String');
            }
            if (data.hasOwnProperty('exception')) {
                obj['exception'] = ApiClient.convertToType(data['exception'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
MozuAppDevContractsActionLoggingEvent.prototype['id'] = undefined;

/**
 * @member {Date} timestamp
 */
MozuAppDevContractsActionLoggingEvent.prototype['timestamp'] = undefined;

/**
 * @member {String} correlationId
 */
MozuAppDevContractsActionLoggingEvent.prototype['correlationId'] = undefined;

/**
 * @member {String} apiContext
 */
MozuAppDevContractsActionLoggingEvent.prototype['apiContext'] = undefined;

/**
 * @member {String} applicationName
 */
MozuAppDevContractsActionLoggingEvent.prototype['applicationName'] = undefined;

/**
 * @member {String} applicationId
 */
MozuAppDevContractsActionLoggingEvent.prototype['applicationId'] = undefined;

/**
 * @member {String} applicationKey
 */
MozuAppDevContractsActionLoggingEvent.prototype['applicationKey'] = undefined;

/**
 * @member {String} content
 */
MozuAppDevContractsActionLoggingEvent.prototype['content'] = undefined;

/**
 * @member {String} fullMessage
 */
MozuAppDevContractsActionLoggingEvent.prototype['fullMessage'] = undefined;

/**
 * @member {String} scaleUnit
 */
MozuAppDevContractsActionLoggingEvent.prototype['scaleUnit'] = undefined;

/**
 * @member {Number} severity
 */
MozuAppDevContractsActionLoggingEvent.prototype['severity'] = undefined;

/**
 * @member {String} functionId
 */
MozuAppDevContractsActionLoggingEvent.prototype['functionId'] = undefined;

/**
 * @member {String} actionId
 */
MozuAppDevContractsActionLoggingEvent.prototype['actionId'] = undefined;

/**
 * @member {String} actionDomain
 */
MozuAppDevContractsActionLoggingEvent.prototype['actionDomain'] = undefined;

/**
 * @member {String} exception
 */
MozuAppDevContractsActionLoggingEvent.prototype['exception'] = undefined;






export default MozuAppDevContractsActionLoggingEvent;

