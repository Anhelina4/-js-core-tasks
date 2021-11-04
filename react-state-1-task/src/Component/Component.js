   
  import React, { useState } from 'react';

  function Component() {
    // Объявляем новую переменную состояния, которую назовём "count"
    const [count, setCount] = useState(0);
    const [countSecond, setCountSecond] = useState(0);
    const [countThird, setCountThird] = useState(0);
    const [countFourth, setCountFourth] = useState(0);

    return (
      <>
      <div>
        <p>Вы кликнули {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Кликни меня!
        </button>
      </div>
      <div>
      <p>Вы кликнули {countSecond} раз</p>
        <button onClick={() => setCountSecond(countSecond + 1)}>
          Кликни меня!
        </button>
        {countSecond <=10 ? <div>Count меньше 10</div> : <div>Count больше 10</div>}
      </div>
      <div>
      <p>Вы кликнули {countThird} раз</p>
        <button onClick={() => setCountThird(countThird - 1)}>
          Reduce
        </button>
        <button onClick={() => setCountThird(countThird + 1)}>
          Increase
        </button>
        </div>
        <div>
      <p>Вы кликнули {countFourth} раз</p>
        <button onClick={() => setCountFourth(countFourth + 1)}>
          Increase 1
        </button>
        <button onClick={() => setCountFourth(countFourth + 5)}>
          Increase 5
        </button>
        <button onClick={() => setCountFourth(countFourth + 10)}>
          Increase 10
        </button>
        <button onClick={() => setCountFourth(countFourth * countFourth)}>
          Multiply
        </button>
        </div>
      </>
    );
  }

  export default Component