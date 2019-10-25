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
    instance = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
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

  describe('MozuAppDevContractsApplicationCapabilityView', function() {
    it('should create an instance of MozuAppDevContractsApplicationCapabilityView', function() {
      // uncomment below and update the code to test MozuAppDevContractsApplicationCapabilityView
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsApplicationCapabilityView);
    });

    it('should have the property applicationCapabilityId (base name: "applicationCapabilityId")', function() {
      // uncomment below and update the code to test the property applicationCapabilityId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

    it('should have the property capabilityTypeContractId (base name: "capabilityTypeContractId")', function() {
      // uncomment below and update the code to test the property capabilityTypeContractId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

    it('should have the property applicationEndPoint (base name: "applicationEndPoint")', function() {
      // uncomment below and update the code to test the property applicationEndPoint
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

    it('should have the property contractName (base name: "contractName")', function() {
      // uncomment below and update the code to test the property contractName
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

    it('should have the property verb (base name: "verb")', function() {
      // uncomment below and update the code to test the property verb
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

    it('should have the property packageId (base name: "packageId")', function() {
      // uncomment below and update the code to test the property packageId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationCapabilityView();
      //expect(instance).to.be();
    });

  });

}));