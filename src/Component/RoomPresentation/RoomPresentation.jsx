import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#e4f7d199] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-green-700 text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                    Las habitaciones del Hotel Natural están diseñadas para ofrecer comodidad y descanso en un ambiente fresco y funcional. Todas están equipadas con aire acondicionado, garantizando una estadía agradable incluso en los días más cálidos de Medellín. Las opciones individuales son ideales para quienes viajan solos y buscan simplicidad con todas las comodidades básicas. Las habitaciones familiares, por otro lado, ofrecen espacio adicional y están preparadas para recibir a grupos pequeños o familias, con acceso al encantador jardín central, perfecto para relajarse en cualquier momento del día. 
                    </p>
                    <button onClick={HandNext}  className="text-white bg-green-700 mt-4  w-[200px] p-3 rounded hover:bg-green-700"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://grupo-hoteles.com/storage/app/3/rooms/845929305-75-rooms-slider-1-1771014290-75-rooms-slider-2-WhatsApp%20Image%202023-06-07%20at%201.58.42%20PM%20(1).jpeg" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-lg shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion