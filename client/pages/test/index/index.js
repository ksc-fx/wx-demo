// pages/component/index.js
import { a, b, c } from './test-es6';
console.log('Test es6 export-common');
console.log(a, b, c);

Page({
    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log('page onload event');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('page onReady event');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log('page onShow event');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log('page onHide event');
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
        console.log('page onTabItemTap event');
    }
});
