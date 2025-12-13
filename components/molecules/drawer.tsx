'use client'

import dynamic from 'next/dynamic'
import { dir } from 'i18next'
import { SwipeableDrawer, Toolbar, Grid } from '@mui/material'
import { red, blueGrey } from '@mui/material/colors'
import { Close as CloseIcon, ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIosNew as ArrowBackIosNewIcon } from '@mui/icons-material'

// Types
import type { DrawerProps } from '@/types/components/molecules/drawer'

// Components
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))

const DrawerMolecule = (props: DrawerProps) => {
	// Props
	const { lng, open, setOpen, menuParent, setMenuParent, children } = props

	// Variables
	const lngDir = dir(lng)

	return (
		<SwipeableDrawer
			anchor="right"
			elevation={0}
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			sx={{
				'& .MuiPaper-root': {
					width: { xs: 1, sm: '60dvw' },
					backgroundImage: 'none',
					'& .MuiGrid-item': {
						width: 1,
						'& li': {
							width: 1,
							'& a': { width: 1 }
						},
						'& .MuiButtonBase-root': {
							justifyContent: 'start',
							width: 1
						}
					}
				}
			}}
		>
			<Toolbar sx={{ mt: 2 }}>
				<IconButtonAtom color={red} icon={<CloseIcon />} onClick={() => setOpen(!open)} />
			</Toolbar>

			<Grid container direction="column" justifyContent={!menuParent ? 'space-between' : 'start'} spacing={3} flexGrow={1} p={2}>
				{menuParent && (
					<Grid>
						<PrimaryButtonAtom
							lng={lng}
							title="form:button.back"
							color={blueGrey}
							endIcon={lngDir === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
							onClick={() => {
								if (setMenuParent) setMenuParent('')
							}}
						/>
					</Grid>
				)}

				{children}
			</Grid>
		</SwipeableDrawer>
	)
}

export default DrawerMolecule
