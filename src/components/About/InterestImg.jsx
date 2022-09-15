import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 800, height: 500, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/CHw4SX0.jpeg',
    title: 'Sunset',
  },
  {
    img: 'https://i.imgur.com/bLsIEGF.jpg',
    title: 'Cali',
  },
  {
    img: 'https://i.imgur.com/1BvWVqD.jpg',
    title: 'Jorgie',
  },
  {
    img: 'https://i.imgur.com/iZybwSl.jpg',
    title: 'Graduation with best friends',
  }
];
