'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
//var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');// root to app

describe("Test for functionality prime number generator", function() {
  it("should return []  for 1", function() {
    expect((myApp.getPrimes(1))).toEqual([]);
  })
  it("should return [2]  for 2", function() {
    expect(myApp.getPrimes(2)).toEqual([2]);
  })
  it("should return [2, 3, 5, 7]  for 10", function() {
    expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
  })
  it("should return [2, 3, 5, 7, 11, 13, 17, 19]  for  20", function(){
    expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  })
  it("should return []  for  0", function(){
    expect(myApp.getPrimes(0)).toEqual([]);
  })
  it("should return [2, 3, 5, 7, 11, 13]  for  15", function(){
    expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
  })
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function(){
    expect(myApp.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  })
  it("should return [2, 3, 5, 7]  for  7", function(){
    expect(myApp.getPrimes(9)).toEqual([2, 3, 5, 7]);
  })
  it("should return [2, 3, 5]  for  7", function(){
    expect(myApp.getPrimes(7)).toEqual([2, 3, 5,7]);
  })
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 50", function(){
    expect(myApp.getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  })
})