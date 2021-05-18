import { extension } from "./logic";

export const lang2extension = (name: string): string | undefined => extension(name);
