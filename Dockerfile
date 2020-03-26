FROM node

# 安装nginx
RUN apt-get update \
    && apt-get install -y nginx

# 指定工作目录
WORKDIR /app
# 将当前目录下的文件拷贝至工作目录
COPY . /app/
# 声明运行时的容器提供服务的端口
EXPOSE 80

RUN rm -rf node_modules/ \
    && npm install --registry=https://registry.npm.taobao.org \
    && npm run build \
    && cp -r dist/* /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


