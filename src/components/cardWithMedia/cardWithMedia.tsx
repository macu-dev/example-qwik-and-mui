import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import type {CardWithMediaProps} from './cardWithMedia.interface'

/** @jsxImportSource react */
export function  CardWithMedia ({title, text, img}: CardWithMediaProps) {
  return (
    <Card>
      <CardActionArea>
        {
          img && <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        }
        
        <CardContent>
          {
            title && <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          }

          {
            text && 
            <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          }
        </CardContent>
      </CardActionArea>
    </Card> 
  );
}



