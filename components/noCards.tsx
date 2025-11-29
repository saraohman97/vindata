import { TfiFaceSad } from "react-icons/tfi";

const NoCards = () => {
    return ( 
        <div className="w-full h-80 flex items-center justify-center gap-3 text-3xl font-serif bg-gray-50 rounded-3xl">
            Inga inlägg <TfiFaceSad size={40} />
        </div>
     );
}
 
export default NoCards;