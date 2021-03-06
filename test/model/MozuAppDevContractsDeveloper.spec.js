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
    instance = new KiboAppDevService.MozuAppDevContractsDeveloper();
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

  describe('MozuAppDevContractsDeveloper', function() {
    it('should create an instance of MozuAppDevContractsDeveloper', function() {
      // uncomment below and update the code to test MozuAppDevContractsDeveloper
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsDeveloper);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

    it('should have the property doesAcceptMarketing (base name: "doesAcceptMarketing")', function() {
      // uncomment below and update the code to test the property doesAcceptMarketing
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloper();
      //expect(instance).to.be();
    });

  });

}));
