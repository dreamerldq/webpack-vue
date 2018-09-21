# 前端架构

### 依赖下载
npm install

### 常用命令
npm run build 打包
npm run dev 启动开发环境    http://localhost:8080/html/***.html

### 编译器 vscode 配置
```
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      "javascript",{
          "language": "vue",
          "autoFix": true
      },
      "vue"
  ]
}
```
### 接口请求 axios
封装原生XHR, 提供构造实例，请求、相应监听处理等

### UI框架 element
按需加载，减少构建包体积