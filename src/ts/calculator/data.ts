interface BaseItem {
  x: number;
  y: number;
  rotate: number;
  init: (pos: [number, number]) => void;
  onRotate: (d: number) => void;
}

export const baseItem: BaseItem = {
  rotate: 0,
  x: 0,
  y: 0,
  init(pos) {
    this.x = pos[0];
    this.y = pos[1];
  },
  onRotate(deg: number) {}
};

export type Heights = 2.4 | 4.8;
export type Widths = 4 | 5 | 6 | 7 | 8 | 9;

export const heights = new Map<Heights, number>();
heights.set(2.4, 240);
heights.set(4.8, 480);

export const widths = new Map<Widths, number>();
widths.set(4, 400);
widths.set(5, 496);
widths.set(6, 608);
widths.set(7, 704);
widths.set(8, 800);
widths.set(9, 896);
