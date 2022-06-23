interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

export const useOfflineStorage: () => IUseOfflineStorage = () => {
  const saveData = (key: string, data: any) => {
    const convertingToString = JSON.stringify(data);

    localStorage.setItem(key, convertingToString);
  };

  const loadData = (key: string) => {
    const info = localStorage.getItem(key);

    if (info !== null) {
      // Converting back to original form
      return JSON.parse(info);
    }

    return null;
  };

  return { saveData, loadData };
};
