const nodes = document.querySelectorAll(".item");

console.log(`Number of categories: ${nodes.length}`);

nodes.forEach((node) => {
  console.log(`Category: ${node.firstElementChild.innerText}`);
  console.log(`Elements: ${node.lastElementChild.children.length}`);
});
