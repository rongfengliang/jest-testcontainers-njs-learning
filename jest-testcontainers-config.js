const PWD = __dirname
module.exports = {
    nginx: {
        image: 'nginx',
        tag: '1.22.0-alpine',
        ports: [80],
        env: {
            MYNAME: 'dalong',
        },
        bindMounts: [
            {
                source: `${PWD}/conf/nginx.conf`,
                target: "/etc/nginx/nginx.conf",
                mode: "ro"
            },
            {
                source: `${PWD}/dist/main.js`,
                target: "/opt/jsapp/main.js",
                mode: "ro"
            }
        ]
    }
};