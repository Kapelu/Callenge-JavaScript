
const { expect } = require("chai");
const { LinkedList } = require("../06 - LinkedList/06-LinkedList")


describe("Size", function () {
    var linkedList = new LinkedList();
    it("Size Debe retornar 0 si la lista esta vacía", function () {
        expect(linkedList.size()).to.equal(0);      
      });
    

  
    it("Size Debe retornar la cantidad de elementos que contiene la LinkedList", function () {
      linkedList.add(6);
      linkedList.add(4);
      linkedList.add(2);
      linkedList.add(7);
      linkedList.add(8);
      linkedList.add(1);      
      expect(linkedList.size()).to.equal(6);      
    });
  });


describe("Order LinkedList", function () {
  var linkedList = new LinkedList();

  it("Order Debe retornar una lista ordenada descendentemente", function () {
    linkedList.add(6);
    linkedList.add(4);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(1);
    linkedList.orderList();
    expect(linkedList.head.value).to.equal(8);
    expect(linkedList.head.next.value).to.equal(7);
    expect(linkedList.head.next.next.value).to.equal(6);
    expect(linkedList.head.next.next.next.value).to.equal(4);
    expect(linkedList.head.next.next.next.next.value).to.equal(2);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(1);
  });
});

describe("Insert", function () {
    var linkedList = new LinkedList();
  
    it("Debe agregar el elemento indicado en el indice", function () {
      linkedList.add(6);
      linkedList.add(4);
      linkedList.add(2);
      linkedList.add(7);
      linkedList.add(8);
      linkedList.add(1);
      linkedList.insert(100, 4)
      expect(linkedList.search(100)).to.equal(100);
      expect(linkedList.size()).to.equal(7); 
      linkedList.insert(200,1)  
      expect(linkedList.search(200)).to.equal(200);
      expect(linkedList.size()).to.equal(8); 
    });
  });