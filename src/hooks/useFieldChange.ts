import * as React from 'react';

const isFunc = <P>(val: P | Function): val is Function => typeof val === 'function';

type Dict<T> = { [i: string]: T };
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

function useFieldChange<T extends Dict<string>>(setState: SetState<T>) {
  return (name: keyof T): SetState<T[keyof T]> => (value): void => {
    setState((state) => ({
      ...state,
      [name]: isFunc(value) ? value(state[name]) : value,
    }));
  };
}

export default useFieldChange;
