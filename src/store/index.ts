import  useUserStore from "./modules/user"
import  useTagStore from "./modules/tag"

const useStore = () =>({
  user:useUserStore(),
  tag:useTagStore(),
})


export default useStore;
