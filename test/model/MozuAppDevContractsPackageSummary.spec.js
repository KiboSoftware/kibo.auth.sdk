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
    instance = new KiboAppDevService.MozuAppDevContractsPackageSummary();
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

  describe('MozuAppDevContractsPackageSummary', function() {
    it('should create an instance of MozuAppDevContractsPackageSummary', function() {
      // uncomment below and update the code to test MozuAppDevContractsPackageSummary
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsPackageSummary);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property applicationName (base name: "applicationName")', function() {
      // uncomment below and update the code to test the property applicationName
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property applicationTypeId (base name: "applicationTypeId")', function() {
      // uncomment below and update the code to test the property applicationTypeId
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property majorVersion (base name: "majorVersion")', function() {
      // uncomment below and update the code to test the property majorVersion
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property minorVersion (base name: "minorVersion")', function() {
      // uncomment below and update the code to test the property minorVersion
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property isLocked (base name: "isLocked")', function() {
      // uncomment below and update the code to test the property isLocked
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new KiboAppDevService.MozuAppDevContractsPackageSummary();
      //expect(instance).to.be();
    });

  });

}));
