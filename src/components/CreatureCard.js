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
  const [stats, setStats] = useState(false);

  return (
    <Box className="creature-box" sx={{ minWidth: 275 }}>
      <Card className="creature-card" variant="outlined" sx={{ width: 200 }}>
        {
          <Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.primary">
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
                <Typography>HP: {creature.hp}</Typography>
                <Typography>AC: {creature.ac}</Typography>
                {creature.touch_ac && (
                  <Typography>Touch AC: {creature.touch_ac}</Typography>
                )}
                {creature.ac_flat_footed && (
                  <Typography>
                    Flat Footed AC: {creature.ac_flat_footed}
                  </Typography>
                )}
                {creature.space !== '5' && (
                  <Typography>Space: {creature.space}</Typography>
                )}
                {creature.reach > 0 && (
                  <Typography>Reach: {creature.reach}</Typography>
                )}
                <Button onClick={() => setStats((stats) => !stats)}>
                  Stats
                </Button>
                {stats && (
                  <CardContent>
                    <Typography>Str: {creature.str}</Typography>
                    <Typography>Dex: {creature.dex}</Typography>
                    <Typography>Con: {creature.con}</Typography>
                    <Typography>Int: {creature.int}</Typography>
                    <Typography>Wis: {creature.wis}</Typography>
                    <Typography>Char: {creature.cha}</Typography>
                  </CardContent>
                )}
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
                {saves && (
                  <CardContent>
                    <Typography>Fort: {creature.fort}</Typography>
                    <Typography>Ref: {creature.ref}</Typography>
                    <Typography>Will: {creature.will}</Typography>
                  </CardContent>
                )}
                <Button onClick={() => setWeapons((weapons) => !weapons)}>
                  Weapons
                </Button>
                {weapons && (
                  <CardContent>
                    {creature.melee && (
                      <Typography>Melee: {creature.melee}</Typography>
                    )}
                    {creature.ranged && (
                      <Typography>Ranged: {creature.ranged}</Typography>
                    )}
                  </CardContent>
                )}
                <Button onClick={() => setTreasure((treasure) => !treasure)}>
                  Treasure
                </Button>
                {treasure && <Typography>{creature.treasure}</Typography>}
              </CardContent>
            )}
          </Fragment>
        }
      </Card>
    </Box>
  );
}

export default CreatureCard;
