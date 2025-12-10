export interface ISupporter {
    id: number;
    name: string;
    class_: string;
    approved: string;
}

export interface ISupporterIn {
    name: string;
    class_: string;
}
export interface ISupporterStatus {
    status: boolean;
}