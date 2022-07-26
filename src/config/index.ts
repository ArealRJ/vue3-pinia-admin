/*
 * @Author: RenJie
 * @Date: 2022-05-25 21:08:38
 * @LastEditors: RenJie
 * @LastEditTime: 2022-07-01 09:10:50
 * @FilePath: /vue3-crm/src/config/index.ts
 * @Description: 
 */
import dev_config from "./dev_config"
import prod_config from "./prod_config"


const IsProd = import.meta.env?.VITE_APP_MODE == "production";

const config = {
  ...(IsProd ? prod_config : dev_config)
}

export default config