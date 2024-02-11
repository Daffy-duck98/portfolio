import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {IBuildOptions} from "./types/type";


export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true
    }
}