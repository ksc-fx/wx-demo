//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');

App({
    onLaunch: function() {
        qcloud.setLoginUrl(config.service.loginUrl);
        wx.request({
            url: 'https://api.it120.cc/guang/config/get-value',
            data: {
                key: '10001'
            },
            success: function(res) {
                console.log(res.data);
            }
        });
    },
    login: function(calback) {
        var that = this;
        var token = that.globalData.token;
        if (token) {
            wx.request({
                url:
                    'https://api.it120.cc/' +
                    that.globalData.subDomain +
                    '/user/check-token',
                data: {
                    token: token
                },
                success: function(res) {
                    if (res.data.code != 0) {
                        that.globalData.token = null;
                        that.login();
                    }
                    that.setJsonList();
                    calback();
                }
            });
            return;
        }
        wx.login({
            success: function(res) {
                wx.request({
                    url:
                        'https://api.it120.cc/' +
                        that.globalData.subDomain +
                        '/user/wxapp/login',
                    data: {
                        code: res.code
                    },
                    success: function(res) {
                        if (res.data.code == 10000) {
                            // 去注册
                            that.registerUser();
                            return;
                        }
                        if (res.data.code != 0) {
                            // 登录错误
                            wx.hideLoading();
                            wx.showModal({
                                title: '提示',
                                content: '无法登录，请重试',
                                showCancel: false
                            });
                            return;
                        }
                        //console.log(res.data.data)
                        that.globalData.token = res.data.data.token;
                        that.globalData.uid = res.data.data.uid;
                        calback();
                    }
                });
            }
        });
    },
    registerUser: function(calback) {
        var that = this;
        wx.login({
            success: function(res) {
                var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
                wx.getUserInfo({
                    success: function(res) {
                        var iv = res.iv;
                        var encryptedData = res.encryptedData;
                        // 下面开始调用注册接口
                        wx.request({
                            url:
                                'https://api.it120.cc/' +
                                that.globalData.subDomain +
                                '/user/wxapp/register/complex',
                            data: {
                                code: code,
                                encryptedData: encryptedData,
                                iv: iv
                            }, // 设置请求的 参数
                            success: res => {
                                wx.hideLoading();
                                that.login(calback);
                            }
                        });
                    }
                });
            }
        });
    },
    getJsonList() {
        var that = this;
        wx.request({
            url:
                'https://api.it120.cc/' +
                that.globalData.subDomain +
                '/json/list',
            data: {
                token: that.globalData.token
            }, // 设置请求的 参数
            success: res => {}
        });
    },
    setJsonList() {
        var that = this;
        wx.request({
            url:
                'https://api.it120.cc/' +
                that.globalData.subDomain +
                '/json/set',
            data: {
                token: that.globalData.token,
                type: 'test',
                content: JSON.stringify({
                    a: 'aaaa',
                    b: 'bbbbbbb'
                })
            }, // 设置请求的 参数
            method: 'GET',
            success: res => {
                that.getJsonList();
            }
        });
    },
    globalData: {
        subDomain: 'guang',
        token: false,
        uid: false
    }
});
