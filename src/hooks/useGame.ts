import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
}
interface FetchGameResponse {
    count: number;
    results: Game[];
}
const useGame = () => {
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const controler = new AbortController();
        apiClient
            .get<FetchGameResponse>('/games', { signal: controler.signal })
            .then((res) => setGame(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })
        return () => controler.abort();
    }, []);
    return { games, error }

}

export default useGame