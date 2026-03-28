import { Store } from "src/ts/customStore/store";

declare global {
  interface Window {
    len: Lenis;
    calcStore: Store;
  }
}

export {};
