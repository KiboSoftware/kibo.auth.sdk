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
 * The MozuAppDevContractsProjectSummary model module.
 * @module model/MozuAppDevContractsProjectSummary
 * @version v1
 */
class MozuAppDevContractsProjectSummary {
    /**
     * Constructs a new <code>MozuAppDevContractsProjectSummary</code>.
     * @alias module:model/MozuAppDevContractsProjectSummary
     */
    constructor() { 
        
        MozuAppDevContractsProjectSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MozuAppDevContractsProjectSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MozuAppDevContractsProjectSummary} obj Optional instance to populate.
     * @return {module:model/MozuAppDevContractsProjectSummary} The populated <code>MozuAppDevContractsProjectSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MozuAppDevContractsProjectSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('estimatedEndDate')) {
                obj['estimatedEndDate'] = ApiClient.convertToType(data['estimatedEndDate'], 'Date');
            }
            if (data.hasOwnProperty('projectStatusId')) {
                obj['projectStatusId'] = ApiClient.convertToType(data['projectStatusId'], 'Number');
            }
            if (data.hasOwnProperty('projectStatusName')) {
                obj['projectStatusName'] = ApiClient.convertToType(data['projectStatusName'], 'String');
            }
            if (data.hasOwnProperty('applicationCount')) {
                obj['applicationCount'] = ApiClient.convertToType(data['applicationCount'], 'Number');
            }
            if (data.hasOwnProperty('themeCount')) {
                obj['themeCount'] = ApiClient.convertToType(data['themeCount'], 'Number');
            }
            if (data.hasOwnProperty('widgetCount')) {
                obj['widgetCount'] = ApiClient.convertToType(data['widgetCount'], 'Number');
            }
            if (data.hasOwnProperty('userCount')) {
                obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('engagementNumber')) {
                obj['engagementNumber'] = ApiClient.convertToType(data['engagementNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
MozuAppDevContractsProjectSummary.prototype['id'] = undefined;

/**
 * @member {String} name
 */
MozuAppDevContractsProjectSummary.prototype['name'] = undefined;

/**
 * @member {Date} startDate
 */
MozuAppDevContractsProjectSummary.prototype['startDate'] = undefined;

/**
 * @member {Date} estimatedEndDate
 */
MozuAppDevContractsProjectSummary.prototype['estimatedEndDate'] = undefined;

/**
 * @member {Number} projectStatusId
 */
MozuAppDevContractsProjectSummary.prototype['projectStatusId'] = undefined;

/**
 * @member {String} projectStatusName
 */
MozuAppDevContractsProjectSummary.prototype['projectStatusName'] = undefined;

/**
 * @member {Number} applicationCount
 */
MozuAppDevContractsProjectSummary.prototype['applicationCount'] = undefined;

/**
 * @member {Number} themeCount
 */
MozuAppDevContractsProjectSummary.prototype['themeCount'] = undefined;

/**
 * @member {Number} widgetCount
 */
MozuAppDevContractsProjectSummary.prototype['widgetCount'] = undefined;

/**
 * @member {Number} userCount
 */
MozuAppDevContractsProjectSummary.prototype['userCount'] = undefined;

/**
 * @member {String} clientName
 */
MozuAppDevContractsProjectSummary.prototype['clientName'] = undefined;

/**
 * @member {String} engagementNumber
 */
MozuAppDevContractsProjectSummary.prototype['engagementNumber'] = undefined;






export default MozuAppDevContractsProjectSummary;

