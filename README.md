# Kibana 4.1.3 无nodejs server版安装方法

建议使用nodejs 4.1.0，bower版本 1.5.2。nodejs 5测试发现问题。

### 编译需要准备好的环境
```sh
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli bower uglify-js
```

### 安装离线地图
```sh
$ tar zxf map.tar.gz
```
或者直接改 map_tile.js 把当前离线地图配置
```sh
kibana-client$ cat ./src/kibana/components/vislib/visualizations/tile_map.js
```
```java
          ...
          var tileLayer = L.tileLayer('/map/{z}/{x}/{y}.png');
          // var tileLayer = L.tileLayer('http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}');
          ...
```
改回成原始的mapabc的在线地图。对接国内其他地图库可以把tileLayer改成相应的URL格式，或者直接使用leaflet-chinese库。
```java
          ...
          // var tileLayer = L.tileLayer('/map/{z}/{x}/{y}.png');
          var tileLayer = L.tileLayer('http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}');
          ...
```

在nginx中加上elasticsearch和map配置
```conf
    ...
    gzip  on;
    gzip_comp_level 9;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root /home/xxx/kibana-client/build/dist/kibana/src/public/;
            index  index.html index.htm;
        }
        
        location /map/ {
            alias   /home/xxx/map/;
        }

        location /elasticsearch/ {
            rewrite ^/elasticsearch/?(.*)$ /$1 break;    
            proxy_pass  http://127.0.0.1:9200;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

    }
    ...        
```

### 每次编译方法
```sh
kibana-client$ npm install && bower install
kibana-client$ grunt release
```