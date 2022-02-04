module.exports = {
  title: "rookie_yin的个人博客",
  description: "My tech blog",
  port: "1345",
  head: [
    ["link", { rel: "icon", href: "/img/mao.jpg" }],
    ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    collapsable:true,
    // sidebarDepth: 2,
    // lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },

};
