const { expect } = require("chai");
const { BinarySearchTree } = require("../07-Arboles/07-Arboles")




describe("Search", function () {
    var tree1 = new BinarySearchTree(1)
    tree1.insert(2)
    tree1.insert(3)
    tree1.insert(4)
    tree1.insert(5)
    tree1.insert(6);
       
    it("Search debe retornar el nodo cuando se encuentra", function () {
      expect(tree1.search(3)).to.equal(3);      
    });
  

  it("Search debe retornar 'no se encontró el valor' si el valor no existe en el arbol", function () {
    expect(tree1.search(100)).to.equal("no se encontró el valor");      
  });
});


describe("Height", function () {
   var  tree2 = new BinarySearchTree(1)        
     tree2.insert(2)                           
     tree2.insert(3)
     tree2.insert(4)
     tree2.insert(5)
     tree2.insert(6);
       
    it("Height debe retornar el nivel maximo del arbol", function () {
      expect(tree2.height()).to.equal(5);         
    });
  
   var tree3=new BinarySearchTree(6)
    tree3.insert(4)
    tree3.insert(3)
    tree3.insert(5)
    tree3.insert(8)
    tree3.insert(7)
    tree3.insert(9);
  it("Height debe retornar el nivel maximo del arbol", function () {
    expect(tree3.height()).to.equal(2);       
  });
});


