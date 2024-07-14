export const checkNewVersion = (callback) => {
  if (wx.canIUse("getUpdateManager")) {
    const updateManager = wx.getUpdateManager();
    if (!updateManager || !updateManager.onCheckForUpdate) return;

    updateManager.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: "更新提示",
            content: "小程序版本更新了，请重启应用，以免导致无法正常使用",
            success: (res) => {
              if (res.confirm) {
                updateManager.applyUpdate();
              }
            }
          });
        });

        updateManager.onUpdateFailed(() => {
          wx.showModal({
            title: "更新失败",
            content: "新版本下载失败，请删除当前小程序，重新搜索访问～",
            success: () => {
              if (callback) {
                callback();
              }
            }
          });
        });
      }
    });
  }
};
