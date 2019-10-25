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
    instance = new KiboAppDevService.Version();
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

  describe('Version', function() {
    it('should create an instance of Version', function() {
      // uncomment below and update the code to test Version
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be.a(KiboAppDevService.Version);
    });

    it('should have the property major (base name: "major")', function() {
      // uncomment below and update the code to test the property major
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

    it('should have the property minor (base name: "minor")', function() {
      // uncomment below and update the code to test the property minor
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

    it('should have the property build (base name: "build")', function() {
      // uncomment below and update the code to test the property build
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

    it('should have the property majorRevision (base name: "majorRevision")', function() {
      // uncomment below and update the code to test the property majorRevision
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

    it('should have the property minorRevision (base name: "minorRevision")', function() {
      // uncomment below and update the code to test the property minorRevision
      //var instane = new KiboAppDevService.Version();
      //expect(instance).to.be();
    });

  });

}));
