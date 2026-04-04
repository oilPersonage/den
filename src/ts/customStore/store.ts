export interface TItem {
  id: string;
  rotated: boolean;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  sticky?: "end" | TItem["id"];
}

export interface Container {
  id: string;
  windows: TItem[];
  doors: TItem[];
  walls: TItem[];
}
