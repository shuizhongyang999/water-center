module.exports = {
    // 路径名为 "/<REPO>/"
    base: '/water-ceter/',
    title: '宛在水中央',
    description: '这是我第一个博客',
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
                title: '欢迎浏览',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "介绍", path: "/" }
                ]
            },
            {
                title: "每日生活",
                path: '/handbook/share',
                collapsable: false, // 不折叠
                children: [
                    { title: "日常分享", path: "/handbook/share" },
                    { title: "饭食", path: "/handbook/food" },
                    { title: "碎碎念", path: "/handbook/indexModules" }

                ],
            },
            {
                title: "每日学习",
                path: '/DailyLearning/reap',
                collapsable: false, // 不折叠
                children: [
                    { title: "学习收获", path: "/DailyLearning/reap" },

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