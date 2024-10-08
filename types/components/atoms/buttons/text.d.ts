// Types
import type { ReactNode } from 'react'
import type { Color } from '@mui/material'

export type TextButtonProps = {
	lng?: string
	title: string
	color: Color
	startIcon?: ReactNode
	endIcon?: ReactNode
	onClick?: () => void
}
