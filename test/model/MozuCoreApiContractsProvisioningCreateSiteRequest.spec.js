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
    instance = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
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

  describe('MozuCoreApiContractsProvisioningCreateSiteRequest', function() {
    it('should create an instance of MozuCoreApiContractsProvisioningCreateSiteRequest', function() {
      // uncomment below and update the code to test MozuCoreApiContractsProvisioningCreateSiteRequest
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be.a(KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property masterCatalogId (base name: "masterCatalogId")', function() {
      // uncomment below and update the code to test the property masterCatalogId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property catalogId (base name: "catalogId")', function() {
      // uncomment below and update the code to test the property catalogId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property catalogRequest (base name: "catalogRequest")', function() {
      // uncomment below and update the code to test the property catalogRequest
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property localeCode (base name: "localeCode")', function() {
      // uncomment below and update the code to test the property localeCode
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property domains (base name: "domains")', function() {
      // uncomment below and update the code to test the property domains
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property isMozuStorefront (base name: "isMozuStorefront")', function() {
      // uncomment below and update the code to test the property isMozuStorefront
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property omsCatalogId (base name: "omsCatalogId")', function() {
      // uncomment below and update the code to test the property omsCatalogId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCreateSiteRequest();
      //expect(instance).to.be();
    });

  });

}));
