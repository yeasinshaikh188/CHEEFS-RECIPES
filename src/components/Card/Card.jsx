import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";

const Card = ({card, handleCook}) => {
    const {calories,description, id, header, imageUrl, minute} = card; 

    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={imageUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{header}</h2>
    <p>{description}</p>
    <hr className="my-3" />
    <div className='space-y-2 mb-3'>
   <h3 className='text-xl font-bold'>Ingredients: 6</h3>
    <li>500g ground beef</li>
    <li>1 onion, chopped</li>
    <li>2 cloves garlic, minced</li>
   </div>
   <hr />
   <div className="flex justify-between mt-4">
   <div className="flex items-center">
   <MdOutlineWatchLater />
   <span className="ml-3">{minute}</span>
   </div>
   <div className="flex items-center space-x-3">
    <FaFireAlt />
    <span>{calories}</span>
   </div>
    </div>
    <div className="card-actions">
      <button onClick={() => handleCook(card)} className="btn bg-[#0BE58A] text-black">Want to Cock</button>
    </div>
  </div>
</div>
    );
};

export default Card;