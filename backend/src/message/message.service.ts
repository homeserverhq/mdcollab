/*
 * SPDX-FileCopyrightText: 2025 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { Inject, Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';

import appConfiguration, { AppConfig } from '../config/app.config';
import { ConsoleLoggerService } from '../logger/console-logger.service';
import { isDevMode } from '../utils/dev-mode';
import { getServerVersionFromPackageJson } from '../utils/server-version';
import { PRIVATE_API_PATH, PUBLIC_API_PATH } from '../utils/swagger';

@Injectable()
class MessageService implements OnApplicationBootstrap, OnApplicationShutdown {
  constructor(
    private readonly logger: ConsoleLoggerService,
    @Inject(appConfiguration.KEY)
    private appConfig: AppConfig,
  ) {
    this.logger.setContext(MessageService.name);
  }

  async onApplicationBootstrap(): Promise<void> {
    const version = await getServerVersionFromPackageJson();
    const baseUrl = this.appConfig.baseUrl;
    const port = this.appConfig.backendPort;

    const publicApiDocsURL = new URL(PUBLIC_API_PATH, baseUrl).toString();
    const privateApiDocsURL = new URL(PRIVATE_API_PATH, baseUrl).toString();

    const defaultMessages = [
      `Welcome to mdCollab ${version.fullString}`,
      `You can find the public API specification at ${publicApiDocsURL}`,
      `The backend is listening on port ${port}`,
    ];

    if (isDevMode()) {
      // Insert the private api url only if we're in DevMode
      defaultMessages.splice(
        2,
        0,
        `You can find the private API specification at ${privateApiDocsURL}`,
      );
    }

    for (const message of defaultMessages) {
      this.logger.log(message);
    }
  }

  onApplicationShutdown(): void {
    this.logger.log('Goodbye. Thanks for using mdCollab! ❤️');
  }
}

export default MessageService;
