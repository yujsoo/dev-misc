import React, { memo, useState } from 'react';

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});
Child.displayName = "Child";
// displayName : 설정해주지 않으면 디버깅할 때 Child가 Anonymous로 표시됩니다. 그러나 동작에 문제가 발생하지는 않습니다.

const MemoExam = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
      <Child count={count} />
    </div>
  );
};

export default memo(MemoExam);