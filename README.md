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

### commit规范

```
<type>[optional scope]: <description>
https://www.conventionalcommits.org/en/v1.0.0-beta.2/
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
fix：bug 修复
perf：性能优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型

example: git commit -m"feat(page1): new feat
```