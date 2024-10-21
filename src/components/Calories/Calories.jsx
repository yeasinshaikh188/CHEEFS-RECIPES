import Calori from "../Calori/Calori";


const Calories = ({calories}) => {
    console.log(calories)
    return (
        <div className="bg-gray-300 ml-3 rounded-xl mt-20 md:mt-44 w-full md:w-[30%] text-center p-2">
            <h1 className="text-center font-bold text-3xl w-full ">Calories: {calories.length}</h1>
            <hr className="my-3 bg-black" />
            {
                calories.map(calori  => <Calori calori={calori}></Calori>)
            }
            
        </div>
    );
};

export default Calories;