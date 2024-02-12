export interface User {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
    _id: string;
    submittedAt: Date;
}

export interface Plan {
    index: number,
    viewValue: string
}

export interface Address {
    index: number,
    title: string,
    viewValue: string
}

export interface WebDev {
    id: number;
    title: string;
}

export interface MobileDev {
    id: number;
    title: string;
}

export interface BusinessEnterprise {
    id: number;
    title: string;
}

export interface Technologies {
    id: number;
    title: string;
}