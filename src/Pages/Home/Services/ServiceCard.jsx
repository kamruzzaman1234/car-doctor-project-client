import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({service})=>{
    const {img, title, price} = service
    return(
        <div className="card card-compact bg-base-100 mt-6 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" className="w-[314px] h-[208px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="flex justify-between items-center">
    <p className="text-[#FF3811] text-xl font-bold">Price : ${price}</p>
    <FaArrowRight className="text-[#FF3811] text-xl font-medium"/>
    </div>
    
    
  </div>
</div>
    )
}
export default ServiceCard;