
import { TbDeviceGamepad2 } from "react-icons/tb";
const NotFoundCard = () => {
    return (
        <div className="flex px-5 items-center justify-center py-20 rounded-3xl bg-gray-900">
            <div className="p-6 bg-gray-800 text-white rounded-2xl shadow-lg max-w-sm text-center">
                <div
                    className="w-24 h-24 flex items-center justify-center mx-auto mb-4 rounded-full bg-gray-700"
                > <TbDeviceGamepad2 size={50} /> </div>
                <h2 className="text-xl font-bold mb-2">Player Not Found</h2>
                <p className="text-gray-400 mb-4">
                    Oops! We couldn’t find the player you’re looking for. Please check
                    your search and try again.
                </p>
                
            </div>
        </div>
    );
};

export default NotFoundCard;
