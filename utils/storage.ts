interface Storage {
  set: (key: string, value: any) => void;
  get: (key: string) => any;
  remove: (key: string) => void;
  clear: () => void;
}

const storage: Storage = {
  set: (key: string, value: any) => {
    if (!key || !value) throw new Error('Key and Value must be provided');
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    if (!key) throw new Error('Key must be provided');
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  remove: (key: string) => {
    if (!key) throw new Error('Key must be provided');
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export default storage;
