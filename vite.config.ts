/*
 * @Author: RenJie
 * @Date: 2022-04-08 21:56:44
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-01 09:37:28
 * @FilePath: /vue3-crm/vite.config.ts
 * @Description: 
 */
import { defineConfig, UserConfigExport } from "vite";
import constructConfig from "./src/config/viteConfig";
import vue from "@vitejs/plugin-vue";
import path from "path";

import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { loadEnv } from 'vite'


export default ({ mode }: {
  mode: "dev" | "prod" | "build";
}): UserConfigExport => {
  const userConfig = constructConfig(mode != "dev");
  return defineConfig({
    plugins: [
      vue(
      ),
      ElementPlus({
        // importStyle: "scss",
        useSource: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // base:loadEnv(mode, process.cwd()).VITE_APP_NAME,
    server: {
      port: 3000,
      host: 'localhost',
      open: false, //不打开浏览器
      hmr: true, //开启热更新
      // proxy: {
      //   '/api': {
      //     target: userConfig.baseurl,
      //     changeOrigin: true,
      //     ws: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    base: "./",
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src/") }],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },

    build: {
      outDir: 'crm' //打包后的包名称
    }
  })
}
