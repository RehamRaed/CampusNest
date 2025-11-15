
export default function LandlordCard({landlord}){
    return(
<div className="rounded-2xl px-6 sm:px-8 lg:px-10 py-5 w-full lg:w-[40%] shadow-xl flex flex-col sm:flex-row gap-6 sm:gap-5 items-center">
          <div className="text-4xl flex justify-center flex-2 text-[#F5801D]">
            <div className="p-1 rounded-full border-2 border-[#F5801D] w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shadow-lg overflow-hidden">
              <img
                src={landlord.image}
                alt={landlord.name}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col border-b pb-1 border-gray-300 mt-2">
              <h5 className="font-extrabold text-[20px] mt-1 text-gray-800">
                {landlord.totalReviews}
              </h5>
              <span className="font-bold text-[11px] mb-2 text-gray-700">
                reviews
              </span>
            </div>

            <div className="flex flex-col border-b pb-1 border-gray-300 mt-2">
              <h5 className="font-extrabold text-[20px] mt-1 text-gray-800">
                {landlord.overallRating}
              </h5>
              <span className="font-bold text-[13px] mb-2 text-gray-700">
                rating
              </span>
            </div>

            <div className="flex flex-col mt-2">
              <h5 className="font-extrabold text-[20px] mt-1 text-gray-800">
                {landlord.yearsHosting}
              </h5>
              <span className="font-bold text-[11px] mb-2 text-gray-700">
                years hosting
              </span>
            </div>
          </div>
        </div>

    )}