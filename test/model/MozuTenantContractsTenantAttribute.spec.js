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
    instance = new KiboAppDevService.MozuTenantContractsTenantAttribute();
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

  describe('MozuTenantContractsTenantAttribute', function() {
    it('should create an instance of MozuTenantContractsTenantAttribute', function() {
      // uncomment below and update the code to test MozuTenantContractsTenantAttribute
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be.a(KiboAppDevService.MozuTenantContractsTenantAttribute);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

    it('should have the property createBy (base name: "createBy")', function() {
      // uncomment below and update the code to test the property createBy
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

    it('should have the property updateBy (base name: "updateBy")', function() {
      // uncomment below and update the code to test the property updateBy
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "updateDate")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new KiboAppDevService.MozuTenantContractsTenantAttribute();
      //expect(instance).to.be();
    });

  });

}));
