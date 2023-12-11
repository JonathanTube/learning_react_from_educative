;(() => {
  class LinkedNode {
    constructor(key: number, val: number) {
      this.key = key
      this.val = val
    }
    key: number
    val: number
    prev?: LinkedNode
    next?: LinkedNode
  }
  // head <-> 1 <-> 1 <-> tail
  class LRUCache {
    private capacity: number
    private size: number
    private map: Map<number, LinkedNode>
    private head: LinkedNode
    private tail: LinkedNode
    constructor(capacity: number) {
      this.capacity = capacity
      this.size = 0
      this.map = new Map()
      this.head = new LinkedNode(-1, -1)
      this.tail = new LinkedNode(-1, -1)
      // head <-> tail
      this.head.next = this.tail
      this.tail.prev = this.head
    }

    get(key: number): number {
      let node = this.map.get(key)
      if (node == undefined) return -1
      this.removeFromLinkedList(node)
      this.insertAfterHead(node)
      return node.val
    }
    // map = [[1,1]]
    // list = head <-> (1, 1)
    put(key: number, value: number): void {
      let node = this.map.get(key)

      if (node == undefined || node == null) {
        node = new LinkedNode(key, value)
        this.map.set(key, node)
        if (this.size >= this.capacity) {
          this.removeFromLinkedList(this.tail.prev)
          this.map.delete(this.tail.key)
        }
      } else {
        node.val = value
        this.removeFromLinkedList(node)
      }
      this.insertAfterHead(node)
    }

    removeFromLinkedList(node: LinkedNode): void {
      // head <-> 1 <-> 2 <-> tail
      node.prev.next = node.next
      node.next.prev = node.prev
      node.next = null
      node.prev = null
      this.size--
    }

    insertAfterHead(newNode: LinkedNode) {
      newNode.next = this.head.next
      this.head.next = newNode

      newNode.next.prev = newNode
      newNode.prev = this.head
      this.size++
    }
  }

  const cache: LRUCache = new LRUCache(2)
  cache.put(1, 1)
  cache.put(2, 2)
  cache.get(1)
  cache.put(3, 3)
  cache.get(2)
  cache.put(4, 4)
  cache.get(1)
  cache.get(3)
  cache.get(4)
})()
