class Node {
  constructor({ Value }) {
    this.Value = Value;
    this.Next;
  }
}

const first = new Node({ Value: 3 });
const second = new Node({ Value: 5 });
first.Next = second;
const third = new Node({ Value: 7 });
second.Next = third;

function printNodeList(node) {
  while (node != null) {
    console.log(node.Value);
    node = node.Next;
  }
}

printNodeList(first);