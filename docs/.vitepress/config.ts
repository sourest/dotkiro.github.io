import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Logs',
  description: 'Kiro\'s Logs',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: 'Y1NCCKGQXM',
      apiKey: '8111d11ab444a6e8dbf93d888a02a5ac',
      indexName: 'Kiro_Logs',
    }
  }
})
