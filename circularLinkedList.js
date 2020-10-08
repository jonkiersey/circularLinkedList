class Node {
  constructor(value) {
    this.value = value;
  }
}

const createList = (numberOfPlayers) => {
  let index = 0;
  let current;
  let head;
  while (index < numberOfPlayers) {
    const newNode = new Node(index);
    if (current) {
      current.next = newNode;
    } else {
      head = newNode;
    }
    current = newNode;
    index = index + 1;
  }
  current.next = head;
  return head;
}

const pickPlayers = (head, playersToSkip, numberOfPlayers) => {
  let current = head;
  let previous;
  const pickedPlayers = [];
  // traverse to first player to pick
  for (let i=0; i<playersToSkip -1; i++) {
    previous = current;
    current = current.next;
  }
  previous.next = current.next;
  pickedPlayers.push(current.value);

  // get the rest of the players
  while (pickedPlayers.length < numberOfPlayers) {
    for (let i=0; i<playersToSkip; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    pickedPlayers.push(current.value);
  }
  return pickedPlayers;
}

const head = createList(10);
const pickedPlayers = pickPlayers(head, 3, 10);
console.log(pickedPlayers.join(' '));


