'use client';

import { atom, useAtom } from 'jotai';

// 1. set initial atom for app direction
const directionAtom = atom(
  typeof window !== 'undefined' ? localStorage.getItem('iso-direction') : 'ltr'
);

const directionAtomWithPersistence = atom(
  (get) => get(directionAtom),
  (get, set, newStorage: any) => {
    set(directionAtom, newStorage);
    localStorage.setItem('iso-direction', newStorage);
  }
);

// 2. useDirection hook to check which direction is available
export function useDirection() {
  const [direction, setDirection] = useAtom(directionAtomWithPersistence);

  return {
    direction: direction === null ? 'ltr' : direction,
    setDirection,
  };
}
