import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Components
const SettingsTemplate = dynamic(() => import('@/components/templates/settings'))

const HomePage = async (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const { lng } = await params

	return (
		<Box component="main" width={1} px={3}>
			<SettingsTemplate lng={lng} />
		</Box>
	)
}

export default HomePage
