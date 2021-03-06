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
    instance = new KiboAppDevService.MozuAppDevContractsFeature();
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

  describe('MozuAppDevContractsFeature', function() {
    it('should create an instance of MozuAppDevContractsFeature', function() {
      // uncomment below and update the code to test MozuAppDevContractsFeature
      //var instane = new KiboAppDevService.MozuAppDevContractsFeature();
      //expect(instance).to.be.a(KiboAppDevService.MozuAppDevContractsFeature);
    });

    it('should have the property featureId (base name: "featureId")', function() {
      // uncomment below and update the code to test the property featureId
      //var instane = new KiboAppDevService.MozuAppDevContractsFeature();
      //expect(instance).to.be();
    });

    it('should have the property featureName (base name: "featureName")', function() {
      // uncomment below and update the code to test the property featureName
      //var instane = new KiboAppDevService.MozuAppDevContractsFeature();
      //expect(instance).to.be();
    });

    it('should have the property isControl (base name: "isControl")', function() {
      // uncomment below and update the code to test the property isControl
      //var instane = new KiboAppDevService.MozuAppDevContractsFeature();
      //expect(instance).to.be();
    });

    it('should have the property featureValue (base name: "featureValue")', function() {
      // uncomment below and update the code to test the property featureValue
      //var instane = new KiboAppDevService.MozuAppDevContractsFeature();
      //expect(instance).to.be();
    });

  });

}));
