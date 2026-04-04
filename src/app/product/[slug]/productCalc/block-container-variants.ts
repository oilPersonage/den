import { Container } from "src/ts/customStore/store";

export const blockContainerVariants: Map<string, Container> = new Map([]);
blockContainerVariants.set("s-peregorodkoi-prohodnay", {
  id: crypto.randomUUID(),
  doors: [
    { id: "1", top: 0, left: 88, rotated: true },
    { id: "2", top: 64, left: 152, rotated: false },
    { id: "3", top: 224, left: 88, rotated: true, sticky: "end" }
  ],
  windows: [
    { id: "1", top: 164, left: 152, rotated: false },
    { id: "2", top: 112, left: 592, rotated: false, sticky: "end" }
  ],
  walls: [
    { id: "1", top: 112, left: 152, width: 16, height: 208, rotated: false }
  ]
});
blockContainerVariants.set("odno-okno-bez-peregorodok", {
  id: crypto.randomUUID(),
  doors: [{ id: "1", top: 94, left: 592, rotated: false, sticky: "end" }],
  walls: [],
  windows: [{ id: "1", top: 224, left: 105, rotated: true, sticky: "end" }]
});
blockContainerVariants.set("tambur-odno-okno", {
  id: crypto.randomUUID(),
  doors: [
    { id: "1", top: 162, left: 448, rotated: false },
    { id: "2", top: 162, left: 592, rotated: false, sticky: "end" }
  ],
  walls: [
    { id: "1", top: 100, left: 512, rotated: true, height: 16, width: 144 },
    { id: "2", top: 160, left: 448, rotated: false, height: 112, width: 16 }
  ],
  windows: [{ id: "1", top: 224, left: 105, rotated: true, sticky: "end" }]
});
blockContainerVariants.set("s-peregorodkoi-dushevay", {
  id: crypto.randomUUID(),
  doors: [
    { id: "1", top: 64, left: 592, rotated: false, sticky: "end" },
    { id: "2", top: 64, left: 152, rotated: false }
  ],
  windows: [{ id: "1", top: 224, left: 334, rotated: true, sticky: "end" }],
  walls: [
    { id: "1", top: 0, left: 152, width: 16, height: 208, rotated: false }
  ]
});
blockContainerVariants.set("base", {
  id: crypto.randomUUID(),
  doors: [],
  walls: [],
  windows: []
});
