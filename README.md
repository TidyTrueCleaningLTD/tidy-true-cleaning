# 柏垚清洁 / Tidy & True Cleaning Ltd

静态官网，已整理为 **GitHub Pages 可发布版本**。

## 当前内容
- 首页公司介绍
- Airbnb 清洁 / 退房清洁 / 日常清洁 / 开荒清洁
- 联系方式
- 询价表单（提交后调用本地邮件应用，发送到 `tidytruecleaningltd@gmail.com`）
- 基础 SEO（title / meta / robots / sitemap / schema.org）

## 文件结构
- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`

## 本地预览
```bash
cd tidy-true-cleaning
python3 -m http.server 8000
```
打开：<http://localhost:8000>

## GitHub Pages 免费上线步骤
### 方案 1：网页上传（最简单）
1. 登录 GitHub
2. 新建一个公开仓库，例如：`tidy-true-cleaning`
3. 把这个文件夹里的所有文件上传到仓库根目录
4. 进入 GitHub 仓库设置：`Settings` → `Pages`
5. Source 选择 `Deploy from a branch`
6. Branch 选择 `main`，目录选择 `/ (root)`
7. 保存后等待 1-5 分钟
8. 公开网址通常会是：
   `https://你的用户名.github.io/tidy-true-cleaning/`

### 方案 2：以后绑定正式域名
如果以后你买了域名，再把 `CNAME.example` 改成 `CNAME`，内容写正式域名即可。

## 上线后要记得改的 1 个地方
当前 `sitemap.xml` 里还是占位地址：
- `https://example.com/`

上线后请改成你的真实 GitHub Pages 链接，例如：
- `https://yourname.github.io/tidy-true-cleaning/`

## 建议
上线后再做两件事：
1. 提交给 Google Search Console
2. 注册 Google Business Profile

这样以后搜公司名和清洁服务时，更容易被看到。
