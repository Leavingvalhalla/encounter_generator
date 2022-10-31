import { Fragment, useState } from 'react';

import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  Box,
} from '@mui/material/';

function CreatureCard({ creature }) {
  const [expand, setExpand] = useState(false);
  const [skills, setSkills] = useState(false);
  const [saves, setSaves] = useState(false);
  const [weapons, setWeapons] = useState(false);
  const [treasure, setTreasure] = useState(false);

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
              <Button
                onClick={() => setExpand((expand) => !expand)}
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
            {expand && (
              <CardContent>
                <Typography>AC: {creature.ac}</Typography>
                <Typography>Touch AC: {creature.touch_ac}</Typography>
                <Typography>
                  Flat Footed AC: {creature.ac_flat_footed}
                </Typography>
                <Typography>Space: {creature.space}</Typography>
                <Typography>Reach: {creature.reach}</Typography>
                <Button onClick={() => setSkills((skills) => !skills)}>
                  Skills
                </Button>
                {skills && (
                  <CardContent>
                    <Typography>{creature.skills}</Typography>
                    <Typography>Racial Mods: {creature.racial_mods}</Typography>
                    <Typography>languages: {creature.languages}</Typography>
                    <Typography>Speed: {creature.speed}</Typography>
                    {creature.fly_speed && (
                      <Typography>Fly Speed: {creature.fly_speed}</Typography>
                    )}
                  </CardContent>
                )}
                <Button onClick={() => setSaves((saves) => !saves)}>
                  Saves
                </Button>
                <Button onClick={() => setWeapons((weapons) => !weapons)}>
                  Weapons
                </Button>
                <Button onClick={() => setTreasure((treasure) => !treasure)}>
                  Treasure
                </Button>
              </CardContent>
            )}
          </Fragment>
        }
      </Card>
    </Box>
  );
}

export default CreatureCard;
