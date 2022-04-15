import { useEffect, useState } from 'react';

export const useTestHook = (test) => {
  const [testState, setTestState] = useState(test);

  useEffect(() => {
    setTestState(test);
  }, [test]);

  return testState;
};