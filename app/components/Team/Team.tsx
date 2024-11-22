import { TeamCard } from "./TeamCard"
import { TeamData } from "./TeamData"


export const Team = () =>{
    return(
        <>
        <div className="pt-[5rem] pb-[3rem]">
            <h1 className="heading">Meet Our Experts <span className="text-red-600">Chefs</span></h1>
            <p className="text-center font-semibold">With these individuals is where all the magic happens</p>
            <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                {/* team card  */}
                {
                    TeamData.map(data=>{
                        return(
                            <TeamCard key={data.name}
                            name={data.name}
                            image={data.image}
                            position={data.position}
                            />
                        )
                    })
                }
              

            </div>
        </div>
        </>
    )
}