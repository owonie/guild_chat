import { rest } from 'msw';

export const handlers = [
  rest.post('/signin', async (req, res, ctx) => {
    const requestBody = await req.json();
    sessionStorage.setItem('is-authenticated', 'true');
    const responseData = { message: 'Sign in successful', data: requestBody };
    return res(ctx.status(200), ctx.json(responseData));
  }),

  rest.post('/signingoogle', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Gmail Login!',
      })
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'owon',
      })
    );
  }),

  rest.post('emailverify', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        verifyNumber: '252132',
      })
    );
  }),
];
