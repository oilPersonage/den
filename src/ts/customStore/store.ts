import { Draggable } from "animejs";
import { TItem } from "src/app/calc/page";

export interface Container {
  id: string;
  windows: TItem[];
  doors: TItem[];
  walls: TItem[];
}

export interface TState {
  doors: Draggable[];
  windows: Draggable[];
  lastMaxIdx: number;
  w: number;
  h: number;
  currentContainer: string;
  containers: Container[];
}
type ChangeEvent<TState, K extends keyof TState = keyof TState> = {
  property: K;
  newValue: TState[K];
  oldValue: TState[K];
  state: TState;
};

type Callback<TState, K extends keyof TState = keyof TState> = (
  event: ChangeEvent<TState, K>
) => void;

export interface Store {
  state: TState;
  subscribe: (callback: Callback<TState>) => () => void;
  getState: () => TState;
}

export function customStore(initialState: TState): Store {
  const state: TState = { ...initialState };
  const subscribers = new Set<Callback<TState>>();

  const proxy = new Proxy(state, {
    set(target: TState, property: keyof TState, value: TState[keyof TState]) {
      if (target[property] !== value) {
        const oldValue = target[property];
        // @ts-ignore-next-line
        target[property] = value;

        // Уведомляем всех подписчиков
        subscribers.forEach((callback: Callback<TState>) => {
          callback({
            property,
            newValue: value,
            oldValue,
            state: target
          });
        });
      }
      return true;
    }
  });

  return {
    state: proxy,
    subscribe(callback: Callback<TState>) {
      subscribers.add(callback);
      // Возвращаем функцию для отписки
      return () => subscribers.delete(callback);
    },
    getState() {
      return { ...state };
    }
  };
}
