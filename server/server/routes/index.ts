import { Hono } from 'hono';

const router = new Hono()

router.get('/hi', (c) => c.json({ message: 'Hello from business intelligence' }, 200))

export default router

export type Routers = typeof router
