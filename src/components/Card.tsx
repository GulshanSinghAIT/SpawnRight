
interface PlayerDetails {
  born: string;
  nationality: string;
  games: string;
  status: string;
  current_team: string;
  ign: string;
  first_name: string | null;
  last_name: string | null;
  kills: string;
  death: string;
  assists: string;
  kdratio: string;
}
const Card = ({playerData} : {
    playerData: PlayerDetails
}) => {
  return (
    <div className="bg-gray-800 px-5 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            {playerData.ign.toUpperCase()}
          </h2>

          <hr className="bg-gray-500 h-0.5 border-none w-1/3 mb-4" />

          <h2 className="text-lg font-medium text-gray-100 mb-6">
            {playerData.first_name} {playerData.last_name}
          </h2>

          <table className="table-auto text-sm text-gray-400 w-full mb-6">
            <tbody>
              <tr>
                <td className="pr-4 font-medium text-gray-500">Date of Birth:</td>
                <td className="text-gray-300">{new Date(playerData.born).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="pr-4 font-medium text-gray-500">Nationality:</td>
                <td className="text-gray-300">{playerData.nationality}</td>
              </tr>
              <tr>
                <td className="pr-4 font-medium text-gray-500">Games Played:</td>
                <td className="text-gray-300">{playerData.games}</td>
              </tr>
              <tr>
                <td className="pr-4 font-medium text-gray-500">Status:</td>
                <td className="text-gray-300">{playerData.status}</td>
              </tr>
              <tr>
                <td className="pr-4 font-medium text-gray-500">Current Team:</td>
                <td className="text-gray-300">{playerData.current_team}</td>
              </tr>
            </tbody>
          </table>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <p className="text-gray-400 text-sm">Total Kills</p>
              <p className="text-lg font-semibold text-gray-100">{playerData.kills}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <p className="text-gray-400 text-sm">Total Deaths</p>
              <p className="text-lg font-semibold text-gray-100">{playerData.death}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <p className="text-gray-400 text-sm">Total Assists</p>
              <p className="text-lg font-semibold text-gray-100">{playerData.assists}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-center">
              <p className="text-gray-400 text-sm">K/D Ratio</p>
              <p className="text-lg font-semibold text-gray-100">{playerData.kdratio}</p>
            </div>
          </div>
        </div>
  )
}

export default Card