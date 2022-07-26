import dev_config from "./dev_config";
import prod_config from "./prod_config";

let UserConfig: any = null;

//生成config,给node环境用的,单例模式
const constructConfig = (IsProd: boolean) => {
  if (UserConfig != null) {
    return UserConfig;
  } else {
    UserConfig = {
      //是否使用正式环境
      IsProd,
      ...(IsProd ? prod_config : dev_config)
    };
    return UserConfig;
  }
};

export default constructConfig;