module.exports = {
    title: 'a',
    description : '',
    head: [
        ['link', { rel: 'icon', href: '/img/home.png' }]
    ],
    themeConfig: {
        logo: '/img/home.png',
        displayAllHeaders: true,
        nav : [
            { text: '码云', link: 'https://gitee.com/what_and'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            }
        ]
      }
}