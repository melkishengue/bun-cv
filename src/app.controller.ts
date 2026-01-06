import * as React from 'react';
import { Controller, Get, Headers, Param, Query, Res } from '@nestjs/common';
import { renderToReadableStream } from 'react-dom/server';
import type { Response } from 'express';
import { Readable } from 'node:stream';

import { AppService } from './app.service';
import { Layout } from './views/layout';
import { Home } from './views/home';

const renderToClient = async (res: Response, component: React.ReactNode) => {
  const stream = await renderToReadableStream(component, {});

  res.setHeader('Content-Type', 'text/html');
  Readable.fromWeb(stream as any).pipe(res);
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:name?')
  async home(
    @Res() res: Response,
    @Headers('HX-Request') htmxHeader: string,
    @Param('name') name: string,
    @Query('lang') lang?: string,
  ) {
    const data = await this.appService.getData(
      name ?? 'melkishengue',
      lang ?? 'en',
    );
    if (!data) {
      return;
    }

    const content = React.createElement(Home, {
      data,
    });

    if (htmxHeader === 'true') {
      return renderToClient(res, content);
    }

    renderToClient(
      res,
      React.createElement(Layout, {
        content,
        metadata: { title: data.firstName, favicon: data.favicon },
      }),
    );
  }
}
