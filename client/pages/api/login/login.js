var app = getApp();
Page({
    onLoad: function() {
        this.setData({
            hasLogin: app.globalData.token
        });
    },
    login: function() {
        var that = this;
        app.login(() => {
            this.onLoad();
        });
    }
});
