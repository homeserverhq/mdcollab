/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { LogoSize } from './logo-size'
import React from 'react'

interface MdCollabLogoHorizontalGreyProps {
  color: 'dark' | 'light'
  size?: LogoSize | number
  showText?: boolean
  width?: string | number
  className?: string
}

export const MdCollabLogoHorizontalGrey: React.FC<MdCollabLogoHorizontalGreyProps> = ({
  color,
  size = LogoSize.MEDIUM,
  showText = true,
  width = 'auto',
  className
}) => {
  const textColor = color === 'light' ? '#333' : '#fff'
  return (
    <svg
      height={`${size}px`}
      width={width}
      className={className}
      viewBox={showText ? '0 0 360 80' : '0 0 80 80'}
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='mdCollab'>
      <rect x='4' y='8' width='64' height='64' rx='16' fill='#2563eb' />
      <path d='M20 30h32v20H32l-8 8v-8h-4z' fill='#fff' />
      {showText && (
        <text
          x='86'
          y='54'
          fill={textColor}
          fontFamily='Arial, Helvetica, sans-serif'
          fontSize='44'
          fontWeight='700'>
          mdCollab
        </text>
      )}
    </svg>
  )
}
