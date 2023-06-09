import { useTheme } from '@emotion/react';
import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react'
import { useState } from 'react'
function Home() {
    const [products,setProducts]=useState([]);
     const theme=useTheme();
    async function fetchAllProducts() {
       const response=await fetch('https://fakestoreapi.com/products');
       const result=await response.json();
       setProducts(result);
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])
    
  return (
    <Container sx={{py:8}} maxWidth="lg">
        <Grid container spacing={4}>
            {
                products.map(({title,id,price,description,rating,image})=>(
                    <Grid item key={id} xs={12} sm={6} md={3}>
                        <Card sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                            <CardMedia component="img" sx={{alignSelf:"center",width:theme.spacing(30),height:theme.spacing(30),objectFit:"contain",pt:theme.spacing()}} image={image} alt={title}/>
                            <CardContent>
                                <Typography variant='h5' component="h2" gutterBottom sx={{
                                    overflow:"hidden",
                                    textOverflow:"ellipsis",
                                    display:"-webkit-box",
                                    "-webkit-line-clamp":"1",
                                    "-webkit-box-orient":"vertical",
                                }}>
                                  {title}
                                </Typography>
                                <Typography paragraph color="text.secondary" sx={{
                                    overflow:"hidden",
                                    textOverflow:"ellipsis",
                                    display:"-webkit-box",
                                    "-webkit-line-clamp":"2",
                                    "-webkit-box-orient":"vertical",
                                }}>{description}</Typography>
                                <Typography fontSize="large" paragraph>{price}</Typography>
                                <Rating readOnly precision={0.5} value={rating.rate}></Rating>
                            </CardContent>
                            <CardActions sx={{alignSelf:'center'}}>
                                <Button variant="contained">
                                    <ShoppingCartSharp/>
                                    Add to cart
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                ))
            }


        </Grid>
    </Container>
  )
}

export default Home
