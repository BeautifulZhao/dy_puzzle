# 问题总结

## vue中引入assets里面图片的问题？

当路径的文件名需要拼接变量的时候，可使用require()引入。

## git命令

### tag

// 控制台打出当前仓库的所有标签
git tag

// 打标签，tag 自定义标识 版本id -m "备注"
git tag v1.00 440376 -m "2020第一版"

| 查看版本id git rev-parse HEAD ，查看段版本id git rev-parse --short HEAD

// 将v1.00标签提交到git服务器
git push origin v1.00

// 将本地所有标签一次性提交到git服务器
git push origin --tags

// 切换标签
git checkout tagname

// 当前目录全部代码切换到v1.00时的代码
// git checkout v1.00 

// 删除标签
git tag -d v1.00

// 删除git服务器上的标签
git push origin :v1.00

## 切割图片相关

canvas 默认300 X 150

canvas的width和height跟style中定义的width和height是不同的，canvas标签的width和height是画布实际宽度和高度，
绘制的图形都是在这个上面。style的width和height是canvas在浏览器中被渲染的高度和宽度。

使用CSS设置画布的大小会导致画布按比例缩放你设置的值（CSS设置的宽高和300 * 150 的比值）

例如，用CSS设置canvas 的宽高为450*300，对应默认的画布大小300 * 150 ，宽高比分别为 1.5和2 ，所以画布中100*100的图片会显示为宽100*1.5 150px， 高100*2 200px。

改变canvas 的默认大小

```html
// 方法一
<canvas width="100px" height="100px"></canvas>

// 方法二，通过js的方法实现
canvas.width="100"
canvas.height="100"
```

## JS更新DOM后，页面没有及时渲染的问题？（JS线程阻塞和解决办法）

两个概念：

1. js是同步加载的
2. 浏览器执行js程序，高于页面的渲染

于是就出现了js更新DOM，页面不能及时渲染的问题。

例如：

```html
document.body.html('helloworld')

// 程序
$.ajax({
  ...
})

// 运行结果会在ajax执行完毕后，再去渲染页面
```

## v1.01 bug

1. 重新开始后，右下角空白未清空



