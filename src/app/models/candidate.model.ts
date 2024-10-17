export interface Candidate {
    id?: number;
    firstName: string;
    lastName: string;
    jmbg?: string;
    birthYear?: number;
    email: string;
    phone: string;
    note?: string;
    isHired?: boolean;
    lastModified?: Date;
}
