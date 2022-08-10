module.exports = {
    // 路径名为 "/<REPO>/"
    base: '/water-ceter/',
    title: '宛在水中央',
    description: '这是一个看心情更新的博客',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '宛在水中央的博客',
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: 'gitee', link: 'https://gitee.com/water-center' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "介绍", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" },
                    { title: "主页模板", path: "/handbook/indexModules" }

                ],
            }
        ],
        subSidebar: 'auto' //生成子侧边栏
    },
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN' // 日期按照2022/08/01显示
        }
    },
}