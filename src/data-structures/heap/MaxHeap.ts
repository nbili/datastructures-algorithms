export default class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public toString(): string {
    return this.heap.toString();
  }

  private getParentIndex(index) {
    // eq Math.floor
    return ~~((index - 1) / 2);
  }

  private getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  public push(value: number) {
    this.heap.push(value);
    this.heapifyUp();

    return this;
  }

  public pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const res = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return res;
  }

  private heapifyUp() {
    let index = this.heap.length - 1;

    while (this.heap[index] > this.heap[this.getParentIndex(index)]) {
      this.swap(this.heap, index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown() {
    let currentIndex = 0;

    let leftIndex = this.getLeftChildIndex(currentIndex);

    while (leftIndex < this.heap.length) {
      // get largest child index
      let largest =
        leftIndex + 1 < this.heap.length &&
        this.heap[leftIndex + 1] > this.heap[leftIndex]
          ? leftIndex + 1
          : leftIndex;

      // current compare to child index
      largest =
        this.heap[largest] > this.heap[currentIndex] ? largest : currentIndex;

      if (largest === currentIndex) break;

      this.swap(this.heap, largest, currentIndex);
      currentIndex = largest;
      leftIndex = this.getLeftChildIndex(currentIndex);
    }
  }

  public peek() {
    return this.heap[0];
  }

  private swap(array: number[], a: number, b: number) {
    if (a === b) return array;
    array[a] = array[a] ^ array[b];
    array[b] = array[a] ^ array[b];
    array[a] = array[a] ^ array[b];
  }
}
