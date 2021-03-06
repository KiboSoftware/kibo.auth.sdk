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
    instance = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
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

  describe('MozuCoreApiContractsProvisioningCloneTenantDataRequest', function() {
    it('should create an instance of MozuCoreApiContractsProvisioningCloneTenantDataRequest', function() {
      // uncomment below and update the code to test MozuCoreApiContractsProvisioningCloneTenantDataRequest
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be.a(KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest);
    });

    it('should have the property sourceEnvironment (base name: "sourceEnvironment")', function() {
      // uncomment below and update the code to test the property sourceEnvironment
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceScaleUnit (base name: "sourceScaleUnit")', function() {
      // uncomment below and update the code to test the property sourceScaleUnit
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceTenantId (base name: "sourceTenantId")', function() {
      // uncomment below and update the code to test the property sourceTenantId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetTenantId (base name: "targetTenantId")', function() {
      // uncomment below and update the code to test the property targetTenantId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetTenantName (base name: "targetTenantName")', function() {
      // uncomment below and update the code to test the property targetTenantName
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property devAccountId (base name: "devAccountId")', function() {
      // uncomment below and update the code to test the property devAccountId
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property masterCatalogPairings (base name: "masterCatalogPairings")', function() {
      // uncomment below and update the code to test the property masterCatalogPairings
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationsToClone (base name: "applicationsToClone")', function() {
      // uncomment below and update the code to test the property applicationsToClone
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instane = new KiboAppDevService.MozuCoreApiContractsProvisioningCloneTenantDataRequest();
      //expect(instance).to.be();
    });

  });

}));
