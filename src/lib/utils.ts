import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
