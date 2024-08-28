import { Grid2 as Grid, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

// Types
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h1" fontSize={{ xs: 36, md: 72 }} fontWeight={700}>
					{children}
				</Typography>
			</Grid>
		),
		h2: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h2">{children}</Typography>
			</Grid>
		),
		h3: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h3">{children}</Typography>
			</Grid>
		),
		h4: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h4">{children}</Typography>
			</Grid>
		),
		h5: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h5">{children}</Typography>
			</Grid>
		),
		h6: ({ children }) => (
			<Grid size={12}>
				<Typography variant="h6">{children}</Typography>
			</Grid>
		),
		p: ({ children }) => (
			<Grid size={12}>
				<Typography variant="body1">{children}</Typography>
			</Grid>
		),
		pre: ({ children }) => (
			<Grid size={12}>
				<Typography component="pre">{children}</Typography>
			</Grid>
		),
		table: ({ children }) => (
			<Grid size={12}>
				<Table>{children}</Table>
			</Grid>
		),
		thead: ({ children }) => <TableHead>{children}</TableHead>,
		tbody: ({ children }) => <TableBody>{children}</TableBody>,
		tr: ({ children }) => <TableRow>{children}</TableRow>,
		td: ({ children }) => <TableCell>{children}</TableCell>,
		th: ({ children }) => <TableCell>{children}</TableCell>,
		...components
	}
}
