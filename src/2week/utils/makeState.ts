let _state: any;

export const State = <T>(initialState: T): [T, (newState: T) => void] => {
  _state = initialState;

  const setState = (newState: T) => {
    _state = newState;
  };

  return [_state, setState];
};
