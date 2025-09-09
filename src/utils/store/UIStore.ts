import { Store } from "pullstate";

interface IUIStore {
  getsidebarLayoutCollapsed:boolean
}
export const UIStore = new Store<IUIStore>({
 getsidebarLayoutCollapsed:false
});