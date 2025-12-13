import dynamic from 'next/dynamic'
import { Box, Grid, Toolbar, Container } from '@mui/material'

// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/app/layouts'
import type { PageProps } from '@/types/app/pages'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Components
const AppbarOrganism = dynamic(() => import('@/components/organisms/appbar'))

// Metadata
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	// Props
	const { params } = props
	const { lng } = await params

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: t('links:home') }

	return metadata
}

const MainLayout = async (props: LayoutProps) => {
	// Props
	const { params, children } = props
	const { lng } = await params

	return (
		<Box display="flex">
			<AppbarOrganism lng={lng} />

			<Grid container>
				<Container
					maxWidth="md"
					sx={{
						textAlign: 'center',
						zIndex: 1
					}}
				>
					<Toolbar
						sx={{
							boxSizing: 'content-box',
							py: { md: 2 }
						}}
					/>

					{children}
				</Container>
			</Grid>
		</Box>
	)
}

export default MainLayout
