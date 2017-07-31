export default class Storage {
  static setUser(token, user, account) {
    const v = {token, user, account};
    localStorage.setItem('token', JSON.stringify(v));
  }
  static getValue(key) {
    let value = undefined;
    let store = localStorage.getItem('token');
    if (store) {
      store = JSON.parse(store);
      value = store[key];
    }
    return value;
  }
  static resetToken() {
    let store = localStorage.getItem('token');
    if (store) {
      store = JSON.parse(store);
      const v = {account: store['account']};
      localStorage.setItem('token', JSON.stringify(v));
    }
  }
  static updateUser(user) {
    let store = localStorage.getItem('token');
    if(store) {
      store = JSON.parse(store);
      store.user = user;
      localStorage.setItem('token', JSON.stringify(store));
    }
  }
}
