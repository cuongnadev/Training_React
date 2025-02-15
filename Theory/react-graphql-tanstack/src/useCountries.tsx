import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";

const endPoint = "https://countries.trevorblades.com/";

interface Country {
    name: string;
    code: string;
    emoji: string;
}

interface CountriesResponse {
    countries: Country[];
}

const countriesQuery = gql`
    {
        countries {
            name
            code
            emoji
        }
    }
`;

export const useCountries = () => {
    return useQuery<CountriesResponse, Error>({
        queryKey: ["countries"],
        queryFn: async () => request<CountriesResponse>(endPoint, countriesQuery)
    });
}