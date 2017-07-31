export default class Storage {
  /**
   * 获取指定 key 的值
   * @static
   * @param {any} key 
   * @returns 
   * @memberof Storage
   */
  static get(key) {
    let value = undefined;
    let store = localStorage.getItem(key);
    if (store) {
      store = JSON.parse(store);
      value = store;
    }
    return value;
  }
  /**
   * 设置用户 Token 信息
   * @static
   * @param {any} token 
   * @param {any} user 
   * @param {any} account 
   * @memberof Storage
   */
  static setUser(token, user, account) {
    const v = { token, user, account };
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
      const v = { account: store['account'] };
      localStorage.setItem('token', JSON.stringify(v));
    }
  }
  static updateUser(user) {
    let store = localStorage.getItem('token');
    if (store) {
      store = JSON.parse(store);
      store.user = user;
      localStorage.setItem('token', JSON.stringify(store));
    }
  }
}