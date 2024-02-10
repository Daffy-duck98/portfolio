import webpack from 'webpack';
import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {IBuildPaths, TBuildMode} from "./config/build/types/type";


interface IEnvVariables {
    mode: TBuildMode;
    port: number;
}

export default (env: IEnvVariables) => {

    const paths: IBuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths

    })
    return config;
}