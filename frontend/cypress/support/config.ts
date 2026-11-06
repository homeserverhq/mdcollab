/*
 * SPDX-FileCopyrightText: 2025 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { AuthProviderType } from '@hedgedoc/commons'
import { HttpMethod } from '../../src/handler-utils/respond-to-matching-request'

declare namespace Cypress {
  interface Chainable {
    loadConfig(additionalConfig?: Partial<typeof config>): Chainable<Window>
    logIn: Chainable<Window>
    logOut: Chainable<Window>
  }
}

export const branding = {
  name: 'DEMO Corp',
  logo: '/public/img/demo.png'
}

export const authProviders = [
  {
    type: AuthProviderType.LOCAL
  },
  {
    type: AuthProviderType.LDAP,
    identifier: 'test-ldap',
    providerName: 'Test LDAP'
  },
  {
    type: AuthProviderType.OIDC,
    identifier: 'test-oidc',
    providerName: 'Test OIDC'
  }
]

export const config = {
  allowRegister: true,
  allowProfileEdits: true,
  allowChooseUsername: true,
  guestAccess: 'write',
  authProviders: authProviders,
  branding: branding,
  useImageProxy: false,
  specialUrls: {
    privacy: 'https://example.com/privacy',
    termsOfUse: 'https://example.com/termsOfUse',
    imprint: 'https://example.com/imprint'
  },
  version: {
    major: 0,
    minor: 0,
    patch: 0,
    preRelease: '',
    commit: 'MOCK'
  },
  plantumlServer: 'http://mock-plantuml.local',
  maxDocumentLength: 200
}

Cypress.Commands.add('loadConfig', (additionalConfig?: Partial<typeof config>) => {
  return cy.request(HttpMethod.POST, '/api/private/config', { ...config, ...additionalConfig })
})

Cypress.Commands.add('logIn', () => {
  return cy.setCookie('mock-session', '1', { path: '/' })
})

Cypress.Commands.add('logOut', () => {
  return cy.clearCookie('mock-session')
})

beforeEach(() => {
  cy.loadConfig()
  cy.logIn()
})
