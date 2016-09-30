// 配置配置文件，注意，清空所有的配置，只留下以下代码即可。
fis.match('*.{png,jpg,gif,js,css}', {
  release: '/static/$0'
});
fis.match('*.js', {
  useHash: true
});

fis.match('*.css', {
  useHash: true
});

fis.match('*.png', {
  useHash: true
});
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});
