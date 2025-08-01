import Router from '@koa/router'

export function createQuestRouter(questController) {
  const router = new Router()

  router.get('/', (ctx) => {
    ctx.body = questController.getQuests()
  })

  return router
}
