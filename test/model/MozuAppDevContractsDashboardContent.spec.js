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
    instance = new KiboAppDevService.MozuAppDevContractsDashboardContent();
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

  describe('MozuAppDevContractsDashboardContent', function() {
    it('should create an instance of MozuAppDevContractsDashboardContent', function() {
      // uncomment below and update the code to test MozuAppDevContractsDashboardContent
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsDashboardContent);
    });

    it('should have the property dashboardContentId (base name: "dashboardContentId")', function() {
      // uncomment below and update the code to test the property dashboardContentId
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property contentLink (base name: "contentLink")', function() {
      // uncomment below and update the code to test the property contentLink
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property contentTitle (base name: "contentTitle")', function() {
      // uncomment below and update the code to test the property contentTitle
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property contentSequence (base name: "contentSequence")', function() {
      // uncomment below and update the code to test the property contentSequence
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property dashboardContentTypeId (base name: "dashboardContentTypeId")', function() {
      // uncomment below and update the code to test the property dashboardContentTypeId
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new KiboAppDevService.MozuAppDevContractsDashboardContent();
      //expect(instance).to.be();
    });

  });

}));
