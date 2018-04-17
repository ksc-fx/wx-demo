Page({
  data: {
    text: "德玛夏",
    title: "text",
    canAdd: true,
    canRemove: false
  },
  addText: function() {
    const tempText = this.data.text + "\n德玛西亚";
    this.setData({
      text: tempText,
      canAdd: tempText.length < 30,
      canRemove: tempText.length > 0
    });
  },
  removeText: function() {
    const tempText = this.data.text.substr(0, this.data.text.length - 1);
    this.setData({
      text: tempText,
      canAdd: tempText.length < 30,
      canRemove: tempText.length > 0
    });
  }
});
