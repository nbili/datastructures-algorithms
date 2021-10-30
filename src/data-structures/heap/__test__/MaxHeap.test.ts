import MaxHeap from "../MaxHeap";

describe("MaxHeap", () => {
  it("should create an empty max heap", () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).toBeDefined();
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it("should push items from the heap and heapify it up", () => {
    const maxHeap = new MaxHeap();

    maxHeap.push(3);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(3);
    expect(maxHeap.toString()).toBe("3");

    maxHeap.push(5);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe("5,3");

    maxHeap.push(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe("10,3,5");

    maxHeap.push(2);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe("10,3,5,2");
  });

  it("should items from the heap and heapify it down", () => {
    const maxHeap = new MaxHeap();

    maxHeap.push(3).push(5).push(10).push(2);

    expect(maxHeap.toString()).toBe("10,3,5,2");

    expect(maxHeap.pop()).toBe(10);
    expect(maxHeap.toString()).toBe("5,3,2");

    expect(maxHeap.pop()).toBe(5);
    expect(maxHeap.toString()).toBe("3,2");
  });
});
