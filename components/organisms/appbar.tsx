'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Menu as MenuIcon } from '@mui/icons-material'

// Types
import type { Theme } from '@mui/material/styles'
import type { AppbarProps } from '@/types/components/organisms/appbar'

// Components
const HideOnScrollTemplate = dynamic(() => import('@/components/templates/hide-on-scroll'))
const DrawerMolecule = dynamic(() => import('@/components/molecules/drawer'))
const MenuMolecule = dynamic(() => import('@/components/molecules/menu'))
const SettingsMolecule = dynamic(() => import('@/components/molecules/settings'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const muiTheme = useTheme()
	const [open, setOpen] = useState<boolean>(false)
	const [menuParent, setMenuParent] = useState<string>('')
	const greaterThanMedium = useMediaQuery(muiTheme.breakpoints.up('md'))

	return (
		<HideOnScrollTemplate onlyDesktop={true}>
			<AppBar
				component="nav"
				sx={(theme: Theme) => ({
					color: 'inherit',
					backgroundImage: 'none',
					bgcolor: alpha('#fafafa', 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: 'none',
					...theme.applyStyles('dark', {
						bgcolor: alpha('#131313', 0.17)
					})
				})}
			>
				<Container maxWidth="xl">
					<Toolbar
						sx={{
							boxSizing: 'content-box',
							py: { md: 2 }
						}}
					>
						<LogoShapeAtom lng={lng} />

						<Grid container justifyContent={{ xs: 'end', md: 'space-between' }} flexGrow={1} ml={{ xs: 1, md: 5 }}>
							{!greaterThanMedium && (
								<Grid>
									<IconButtonAtom color={blueGrey} icon={<MenuIcon />} onClick={() => setOpen(!open)} />

									<DrawerMolecule lng={lng} open={open} setOpen={setOpen} menuParent={menuParent} setMenuParent={setMenuParent}>
										<MenuMolecule lng={lng} menuParent={menuParent} setMenuParent={setMenuParent} />
										<SettingsMolecule lng={lng} menuParent={menuParent} setMenuParent={setMenuParent} />
									</DrawerMolecule>
								</Grid>
							)}

							{greaterThanMedium && (
								<>
									<MenuMolecule lng={lng} />
									<SettingsMolecule lng={lng} />
								</>
							)}
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScrollTemplate>
	)
}

export default AppbarOrganism
