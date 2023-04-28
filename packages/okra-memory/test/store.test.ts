import test from "ava"

import { MemoryStore, MemoryTree } from "@canvas-js/okra-memory"

test("get/set/delete", async (t) => {
	const store = new MemoryStore()

	await store.set(Buffer.from("a"), Buffer.from("foo"))
	await store.set(Buffer.from("b"), Buffer.from("bar"))
	await store.set(Buffer.from("c"), Buffer.from("baz"))

	t.deepEqual(await store.get(Buffer.from("b")), Buffer.from("bar"))
	await store.delete(Buffer.from("b"))
	t.deepEqual(await store.get(Buffer.from("b")), null)
})

test("open tree", async (t) => {
	const tree = await MemoryTree.open()
	const root = await tree.getRoot()
	t.deepEqual(root, { level: 0, key: null, hash: Buffer.from("af1349b9f5f9a1a6a0404dea36dcc949", "hex") })
})
