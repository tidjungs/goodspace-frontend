import { observable, action, computed } from 'mobx';

class AppStore {
  @observable birds = [];

  @action 
  addBird = bird => {
    this.birds.push(bird);
  };

  @computed
  get birdCount() {
    return this.birds.length;
  }
}
  
  const singleton = new AppStore();
  export default singleton;