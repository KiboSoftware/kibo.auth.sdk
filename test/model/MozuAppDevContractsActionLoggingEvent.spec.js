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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KiboAppDevService);
  }
}(this, function(expect, KiboAppDevService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MozuAppDevContractsActionLoggingEvent', function() {
    it('should create an instance of MozuAppDevContractsActionLoggingEvent', function() {
      // uncomment below and update the code to test MozuAppDevContractsActionLoggingEvent
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsActionLoggingEvent);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property correlationId (base name: "correlationId")', function() {
      // uncomment below and update the code to test the property correlationId
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property apiContext (base name: "apiContext")', function() {
      // uncomment below and update the code to test the property apiContext
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property applicationName (base name: "applicationName")', function() {
      // uncomment below and update the code to test the property applicationName
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property applicationKey (base name: "applicationKey")', function() {
      // uncomment below and update the code to test the property applicationKey
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property fullMessage (base name: "fullMessage")', function() {
      // uncomment below and update the code to test the property fullMessage
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property scaleUnit (base name: "scaleUnit")', function() {
      // uncomment below and update the code to test the property scaleUnit
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property functionId (base name: "functionId")', function() {
      // uncomment below and update the code to test the property functionId
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property actionId (base name: "actionId")', function() {
      // uncomment below and update the code to test the property actionId
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property actionDomain (base name: "actionDomain")', function() {
      // uncomment below and update the code to test the property actionDomain
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

    it('should have the property exception (base name: "exception")', function() {
      // uncomment below and update the code to test the property exception
      //var instane = new KiboAppDevService.MozuAppDevContractsActionLoggingEvent();
      //expect(instance).to.be();
    });

  });

}));
