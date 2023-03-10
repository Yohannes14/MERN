import { useEffect } from 'react';
import WorkoutDetails from '../component/WorkoutDetails';
import WorkoutForm from '../component/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';


const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUT', payload: json })

      }

    }
    fetchWorkouts()

  }, [dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}

      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home;