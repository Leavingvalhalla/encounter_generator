import { Fragment } from 'react';
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  Box,
} from '@mui/material/';

function CreatureCard({ creature }) {
  return (
    <Box className="creature-box" sx={{ minWidth: 275 }}>
      <Card className="creature-card" variant="outlined" sx={{ width: 200 }}>
        {
          <Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                {creature['name']}
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                CR: {creature['cr']}
              </Typography>
              <Typography variant="body2">
                {creature['maintype']}
                <br />
                {creature['subtype1']}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Fragment>
        }
      </Card>
    </Box>
  );
}

export default CreatureCard;
