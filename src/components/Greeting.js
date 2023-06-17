import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greetingData);
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);
  console.log(greeting);
  const array = [];
  array.push(greeting);
  return (
    <>
      <p>Example of Greetings</p>
      {array.map((item) => (
        <div key={item.id}>
          <h2>{item.message}</h2>
        </div>
      ))}
    </>
  );
}

export default Greeting;
