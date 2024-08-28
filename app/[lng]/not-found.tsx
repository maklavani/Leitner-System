'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container, Grid2 as Grid, Paper } from '@mui/material'
import { green } from '@mui/material/colors'
import { Error as ErrorIcon, Link as LinkIcon } from '@mui/icons-material'

// Components
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))
const TitleTypographyAtom = dynamic(() => import('@/components/atoms/typography/title'))
const ParagraphTypographyAtom = dynamic(() => import('@/components/atoms/typography/paragraph'))

const NotFoundPage = () => {
	// Variables
	const pathname = usePathname()
	const lng = pathname.split('/').find(item => item)

	return (
		<Grid bgcolor="background.default">
			<Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', height: '100dvh' }}>
				<Paper variant="outlined" sx={{ width: 1, borderRadius: 2 }}>
					<Grid container flexDirection="column" alignItems="center" spacing={2} py={4} px={{ xs: 1, md: 2 }}>
						<Grid>
							<ErrorIcon color="error" sx={{ fontSize: 100 }} />
						</Grid>

						<Grid>
							<TitleTypographyAtom lng={lng} text="common:title.notFound" />
						</Grid>

						<Grid>
							<ParagraphTypographyAtom lng={lng} text="common:description.notFound" />
						</Grid>

						<Grid>
							<Link href="/">
								<PrimaryButtonAtom lng={lng} title="form:button.goHome" startIcon={<LinkIcon />} color={green} />
							</Link>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Grid>
	)
}

export default NotFoundPage
