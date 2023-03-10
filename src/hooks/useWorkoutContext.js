import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const contxt = useContext(WorkoutContext);

    if (!contxt) {
        throw Error("useWorkoutContext must be used inside an WorkoutsContextProvider")
    }
    return contxt

}