# Online 3D Viewer 修改版

基于 [v0.12.0 的 #461 PR](https://github.com/kovacsv/Online3DViewer/pull/461) 修改

改动点：

1. 隐藏 logo、选择示例模型
2. 在网站初始化时，接收 message 消息自动加载模型：{type: 'loadModel', modelFileList: [{url:'xxx'}]}
4. 不弹出接受 cookie 弹窗，直接接受
5. 补充了缺失的中文翻译
6. 默认不显示左侧栏和右侧栏
