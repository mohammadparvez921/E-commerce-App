import React from 'react'
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material'
import  ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import { Box } from '@mui/system'
function Header() {
  return (
    <AppBar position='sticky'>
       <Toolbar>
        <Typography
        variant='h6'
        color="inherit"
        sx={{
            flexGrow:1,
        }}
        >Ecomm</Typography>
        <Box  sx={{display:{md:"flex"}}}>
        <IconButton size='large' aria-label='shows cart items count' color='inherit'>
            <Badge badgeContent={2} color="error">
            <ShoppingCartSharpIcon/>
            </Badge>
        </IconButton>
        </Box>
        <Button color='inherit'>Login</Button>
       </Toolbar>

    </AppBar>
  )
}

export default Header
