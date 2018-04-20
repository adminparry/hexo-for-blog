import {observable} from 'mobx';

class Store {
  // 被观察者
  @observable todos = {
    title: "完成 Mobx 翻译",
    done: false,
  };
}
const store = new Store();

export default store
