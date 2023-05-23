class Storage {
  constructor(keyName = "BLOG-") {
    this.prefixKey = keyName;
  }

  setItem(name, value) {
    if (!name) return;
    const key = this.prefixKey + name;
    window.localStorage.setItem(key, value);
  }

  getItem(name) {
    if (!name) return;
    const key = this.prefixKey + name;
    const v = window.localStorage.getItem(key);
    return v;
  }
}

export default Storage;

export const storage = new Storage();
