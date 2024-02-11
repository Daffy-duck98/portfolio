import webpack from 'webpack';
import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {IBuildPaths, TBuildMode, TBuildPlatform} from "./config/build/types/type";


interface IEnvVariables {
    analyzer?: boolean;
    mode?: TBuildMode;
    port?: number;
    platform: TBuildPlatform
}

export default (env: IEnvVariables) => {

    const paths: IBuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'

    })
    return config;
}