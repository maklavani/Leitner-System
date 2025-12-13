// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/app/layouts'
import type { PageProps } from '@/types/app/pages'

// Helpers
import { useTranslation } from '@/helpers/i18n/server'

// Metadata
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
	// Props
	const { params } = props
	const { lng } = await params

	// Variables
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng)

	const metadata: Metadata = { title: t('links:settings') }

	return metadata
}

const Layout = (props: LayoutProps) => {
	// Props
	const { children } = props

	return <>{children}</>
}

export default Layout
