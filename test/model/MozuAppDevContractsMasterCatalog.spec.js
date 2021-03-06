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
    instance = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
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

  describe('MozuAppDevContractsMasterCatalog', function() {
    it('should create an instance of MozuAppDevContractsMasterCatalog', function() {
      // uncomment below and update the code to test MozuAppDevContractsMasterCatalog
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsMasterCatalog);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property defaultLocaleCode (base name: "defaultLocaleCode")', function() {
      // uncomment below and update the code to test the property defaultLocaleCode
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property defaultCurrencyCode (base name: "defaultCurrencyCode")', function() {
      // uncomment below and update the code to test the property defaultCurrencyCode
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property deleteDate (base name: "deleteDate")', function() {
      // uncomment below and update the code to test the property deleteDate
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

    it('should have the property catalogs (base name: "catalogs")', function() {
      // uncomment below and update the code to test the property catalogs
      //var instane = new KiboAppDevService.MozuAppDevContractsMasterCatalog();
      //expect(instance).to.be();
    });

  });

}));
