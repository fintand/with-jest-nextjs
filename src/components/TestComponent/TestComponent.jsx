import { useTestHook } from '@/hooks/useTestHook';

export const TestComponent = () => {
  const testState = useTestHook('Testing 123');

  return (
    <div>
      <h1>Test Component</h1>
      <p>{testState}</p>
    </div>
  );
}