import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import gadget from "../assets/images/gadget.jpg";
import headphones from "../assets/images/headphones.jpg";
import makeup from "../assets/images/makeup.jpg";

const fashionBlogPosts = [
  {
    title: "Top 10 Summer Wardrobe Essentials",
    description: "Explore the must-have fashion items to beat the summer heat.",
    date: "August 12, 2023",
    image: gadget,
  },
  {
    title: "A Guide to Choosing the Perfect",
    description:
      "Discover how to select the ideal evening gown for any special occasion.",
    date: "July 28, 2023",
    image: headphones,
  },
  {
    title: "Accessorize Like a Pro: Jewelry Trends",
    description:
      "Stay stylish with the latest jewelry trends and tips on accessorizing.",
    date: "June 15, 2023",
    image: makeup,
  },
  // Add more fashion blog posts here
];

function Blog() {
  return (
    <>
      <Typography variant="h3" fontWeight="bold" my={8} textAlign="center">
        Our Blog
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {fashionBlogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={post?.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="subtitle1" component="div" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="body2" paragraph>
                  {post.description}
                </Typography>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Blog;
