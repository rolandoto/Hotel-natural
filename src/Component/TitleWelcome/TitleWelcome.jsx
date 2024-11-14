import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-[260px] lg:mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://grupo-hoteles.com/storage/app/3/rooms/1104968326-7-rooms-slider-1-clasica_habitacion_hotel_natural_medellin_centro_antioquia_colombia.webp"
                    alt="Room"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                    </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-green-700 mb-4 font-lora text-[30px] text-center ">Tu refugio económico en el corazón de Medellín</h2>
                <p className="text-gray-700 text-justify	 mb-4">
                Situado en pleno centro de Medellín, el Hotel Natural es un refugio económico y acogedor pensado para quienes desean experimentar la esencia de la ciudad sin renunciar a la tranquilidad. Su jardín central, rodeado de vegetación, es un espacio de paz que invita al descanso en medio del ajetreo urbano. Aquí, cada huésped encuentra un ambiente relajante y accesible, ideal tanto para quienes viajan solos como para familias que buscan un alojamiento cómodo y bien ubicado.
                </p>
                <p className="text-gray-700 text-justify	 ">
                    
                </p>
                </div>
            </div>)

}

export default TitleWelcome