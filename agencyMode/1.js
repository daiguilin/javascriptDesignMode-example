window.onload = function () {
    const myImage = (function () {
        const imgNode = document.createElement('img')
        document.body.appendChild(imgNode)
        return {
            setSrc: function (src) {
                imgNode.src = src
            }
        }
    })()

    const proxyImage = (function () {
        const img = new Image()
        img.onload = function () { // http 图片加载完毕后才会执行
            myImage.setSrc(this.src)
        }
        return {
            setSrc: function (src) {
                myImage.setSrc('avtar.jpg') // 本地 loading 图片
                img.src = src
            }
        }
    })()

    proxyImage.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575013102&di=2cffe939c391dee682a1402d49ffdf40&imgtype=jpg&er=1&src=http%3A%2F%2Fpic44.nipic.com%2F20140723%2F18505720_094503373000_2.jpg')
}
