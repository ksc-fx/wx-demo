// pages/component/index.js
import { a, b, c } from './test-es6';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        pageLifecycleFunction: [],
        testEs6Data: {
            a,
            b,
            c
        }
    },

    pushFunctionName(name) {
        this.data.pageLifecycleFunction.push(name);
        this.setData({
            pageLifecycleFunction: this.data.pageLifecycleFunction
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.pushFunctionName('onLoad');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.pushFunctionName('onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.pushFunctionName('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        this.pushFunctionName('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log('page onUnload event');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {},

    onTabItemTap() {
        this.pushFunctionName('onTabItemTap');
    }
});
