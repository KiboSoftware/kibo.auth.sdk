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
    instance = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
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

  describe('MozuAppDevContractsDeveloperAccountCollection', function() {
    it('should create an instance of MozuAppDevContractsDeveloperAccountCollection', function() {
      // uncomment below and update the code to test MozuAppDevContractsDeveloperAccountCollection
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection);
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be();
    });

    it('should have the property pageCount (base name: "pageCount")', function() {
      // uncomment below and update the code to test the property pageCount
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new KiboAppDevService.MozuAppDevContractsDeveloperAccountCollection();
      //expect(instance).to.be();
    });

  });

}));
