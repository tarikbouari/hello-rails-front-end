import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const { greeting } = useSelector((state) => state.greetings);

  const handleSubmit = () => {
    dispatch(fetchGreetingObj());
  };

  return (
    <div className="greeting-content">
      <h1>{greeting}</h1>
      <button onClick={handleSubmit} type="button">Generate new greeting</button>
    </div>
  );
}

export default Greeting;