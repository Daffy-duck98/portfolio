import {Configuration} from "webpack";
import {IBuildOptions} from "./types/type";

export function buildResolvers(options: IBuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}