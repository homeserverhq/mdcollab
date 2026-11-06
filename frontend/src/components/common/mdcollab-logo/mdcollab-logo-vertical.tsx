/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { LogoSize } from './logo-size'
import React from 'react'

interface MdCollabLogoVerticalProps {
  autoTextColor?: boolean
  size?: LogoSize | number
}

export const MdCollabLogoVertical: React.FC<MdCollabLogoVerticalProps> = ({
  autoTextColor,
  size = LogoSize.MEDIUM
}) => {
  return (
    <svg
      height={`${size}px`}
      width='auto'
      viewBox='0 0 200 240'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='mdCollab'>
      <image href='/logo.png' x='48' y='16' width='104' height='104' preserveAspectRatio='xMidYMid meet' />
      <text
        x='100'
        y='170'
        fill={autoTextColor ? 'currentColor' : '#3662AD'}
        fontFamily='Arial, Helvetica, sans-serif'
        fontSize='28'
        fontWeight='700'
        textAnchor='middle'>
        mdCollab
      </text>
    </svg>
  )
}
