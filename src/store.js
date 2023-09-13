import { atom } from "jotai";

export const globalMessage = atom({fullName: '', email: '', address: ''});
export const eduMessage = atom((get) => "the full name of the user is: " + get(globalMessage).fullName);