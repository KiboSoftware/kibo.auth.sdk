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
    instance = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
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

  describe('MozuAppDevContractsApplicationTemplate', function() {
    it('should create an instance of MozuAppDevContractsApplicationTemplate', function() {
      // uncomment below and update the code to test MozuAppDevContractsApplicationTemplate
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsApplicationTemplate);
    });

    it('should have the property applicationTemplateId (base name: "applicationTemplateId")', function() {
      // uncomment below and update the code to test the property applicationTemplateId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationTemplateName (base name: "applicationTemplateName")', function() {
      // uncomment below and update the code to test the property applicationTemplateName
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationTemplateTypeId (base name: "applicationTemplateTypeId")', function() {
      // uncomment below and update the code to test the property applicationTemplateTypeId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "applicationId")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property versionDescription (base name: "versionDescription")', function() {
      // uncomment below and update the code to test the property versionDescription
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property versionExtendsApplication (base name: "versionExtendsApplication")', function() {
      // uncomment below and update the code to test the property versionExtendsApplication
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationName (base name: "applicationName")', function() {
      // uncomment below and update the code to test the property applicationName
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property developerAccountId (base name: "developerAccountId")', function() {
      // uncomment below and update the code to test the property developerAccountId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property auditInfo (base name: "auditInfo")', function() {
      // uncomment below and update the code to test the property auditInfo
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property applicationTypeId (base name: "applicationTypeId")', function() {
      // uncomment below and update the code to test the property applicationTypeId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property isMaster (base name: "isMaster")', function() {
      // uncomment below and update the code to test the property isMaster
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property templateDescription (base name: "templateDescription")', function() {
      // uncomment below and update the code to test the property templateDescription
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property heroImage (base name: "heroImage")', function() {
      // uncomment below and update the code to test the property heroImage
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property isGlobal (base name: "isGlobal")', function() {
      // uncomment below and update the code to test the property isGlobal
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

    it('should have the property releasePackageId (base name: "releasePackageId")', function() {
      // uncomment below and update the code to test the property releasePackageId
      //var instane = new KiboAppDevService.MozuAppDevContractsApplicationTemplate();
      //expect(instance).to.be();
    });

  });

}));
