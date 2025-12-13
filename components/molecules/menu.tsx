'use client'

import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'
import { cyan, blueGrey, green } from '@mui/material/colors'
import { Villa as VillaIcon, CloudDownload as CloudDownloadIcon, Tune as TuneIcon } from '@mui/icons-material'

// Types
import type { MenuProps } from '@/types/components/molecules/menu'

// Components
const ListItemAtom = dynamic(() => import('@/components/atoms/list-item'))

const MenuMolecule = (props: MenuProps) => {
	// Props
	const { lng, menuParent, setMenuParent } = props

	return (
		!menuParent && (
			<Grid>
				<Grid component="ul" container rowSpacing={{ xs: 1, md: 'inherit' }} columnSpacing={{ md: 2 }} m={0} p={0}>
					<Grid>
						<ListItemAtom lng={lng} link="/" title="links:home" color={cyan} icon={<VillaIcon />} />
					</Grid>

					<Grid>
						<ListItemAtom lng={lng} link="/backup" title="links:backup" color={green} icon={<CloudDownloadIcon />} />
					</Grid>

					<Grid>
						<ListItemAtom lng={lng} link="/settings" title="links:settings" color={blueGrey} icon={<TuneIcon />} />
					</Grid>
				</Grid>
			</Grid>
		)
	)
}

export default MenuMolecule
