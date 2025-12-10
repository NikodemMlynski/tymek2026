import { API_URL } from "@/config/constants";
import type { ISupporter, ISupporterIn } from "@/types/Supporter";
import { useMutation, useQuery } from "@tanstack/react-query";
const fetchSupporters = async (): Promise<ISupporter[]> => {
    const res = await fetch(`${API_URL}supporters`);
    if(!res.ok) {
        const resData = await res.json();
        throw new Error(await resData.detail);
    }
    return res.json();
}
const fetchSupportersCount = async (): Promise<{count: number}> => {
    const res = await fetch(`${API_URL}supporters/count`);
    if(!res.ok) {
        const resData = await res.json();
        throw new Error(await resData.detail);
    }
    return res.json();
}


export function useSupporters() {
    return useQuery({
        queryKey: ["supporters"],
        queryFn: () => fetchSupporters(),
        refetchInterval: 60 * 1000
    })
}
const createSupporter = async (supporterIn: ISupporterIn) => {
    const res = await fetch(`${API_URL}supporters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(supporterIn)
    })
    
    if(!res.ok) {
        const resData = await res.json();
        throw new Error(resData.detail || "Failed to ")
    }
    return res.json();
}

export function useCreateSupporter() {
    return useMutation({
        mutationFn: (data: ISupporterIn) => createSupporter(data),
    })
}

export function useSupportersCount() {
    return useQuery({
        queryKey: ["supporters_count"],
        queryFn: () => fetchSupportersCount(),
        refetchInterval: 60 * 1000
    })
}