整理自己日程需要的资源网站



## TODO
✅最好来个自动解析网站logo的服务,服务如下
```
curl --location 'https://host/extra_site_logo?site=http://www.baidu.com' \
'

response
{
    "code": 200,
    "msg":"",
    "data":{
        "logo": "https://www.baidu.com/logo.svg"
    }
}
```
🔄学习axios发送http请求
🔄对接vercel的数据库
🔄添加一个入口，可以添加资源到服务中
```
curl --location 'https://host/resource/add' \
--header 'Content-Type: application/json' \
--data '{
    "site":"https://www.baidu.com"
}'

response
{
    "code": 200,
    "msg":"",
    "data":{
        "logo": "https://www.baidu.com/logo.svg"
    }
}
```
