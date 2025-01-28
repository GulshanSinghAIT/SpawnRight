import React, { useState } from "react";
import Card from "./Card";
import Notfound from "./Notfound";
import { toast } from "react-toastify";
// Simulated API function
async function fetchPlayerDetails(playerName: string): Promise<PlayerDetails> {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Simulated data
  if (playerName.toLowerCase() === "txsaranggggg") {
    return {
      born: "2000-01-15",
      nationality: "India",
      games: "BGMI",
      status: "Active",
      current_team: "Team X Spark",
      ign: "TXSaranggggg",
      first_name: null,
      last_name: null,
      kills: "1248",
      death: "1055",
      assists: "0",
      kdratio: "1.18",
    };
  }
  else if (playerName.toLowerCase() === "gulshan") {
    return {
      born: "2000-01-15",
      nationality: "India",
      games: "BGMI",
      status: "Active",
      current_team: "Team Gulshan Spark",
      ign: "GulshanBhai",
      first_name: "Gulshan",
      last_name: "Singh",
      kills: "1248",
      death: "1055",
      assists: "0",
      kdratio: "1.18",
    };
  }

  else {
    throw new Error("Player not found");
  }
}
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

const PlayerDetailsComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playerData, setPlayerData] = useState<PlayerDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      toast.error("Please enter a player name.");
      return;
    }
  
    setLoading(true);
    setError("");
    setPlayerData(null);
  
    try {
      const data = await fetchPlayerDetails(searchTerm);
      setPlayerData(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const Loading = () => (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 '>
        <div className="loader"></div>
    </div>
  );
  

  return (
    <div className="pt-[2em] pb-[5em] max-w-6xl mx-auto ">

      <div className="mb-6 flex px-5 items-center">
        <div className="mx-auto  w-full items-center gap-1 rounded-2xl  border-[1.5px] border-neutral-50 shadow-[1px_4px_25px_3px_rgba(0,_0,_0,_0.1)] bg-white pl-5 pr-3  focus-within:border-neutral-200 flex lg:max-w-3xl">
          <input
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 py-5 text-md font-normal text-neutral-900 placeholder-neutral-500 focus-visible:outline-none"
            placeholder="Search for players here..."
            type="url"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-neutral-100 px-4 text-neutral-900">
            <span className="text-sm font-medium"> {loading ? "Searching..." : "Search"}</span>
          </button>
        </div>

      </div>
      {loading && <Loading />}
    <div className="px-3">
      {error && <Notfound  />}

      {playerData && (
        <Card playerData={playerData} />

      )}
      </div>
    </div>
  );
};

export default PlayerDetailsComponent;
