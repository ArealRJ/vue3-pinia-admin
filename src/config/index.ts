import dev_config from "./dev_config"
import prod_config from "./prod_config"


const IsProd = import.meta.env?.VITE_APP_MODE == "production";

const config = {
  ...(IsProd ? prod_config : dev_config)
}

export default config