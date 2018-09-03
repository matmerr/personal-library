import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  addIcon: {
    paddingTop: 10,
  },
});

function BookCard(props) {
  const { classes, image, title, author } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {author}
          </Typography>
          <div className={classes.addIcon}>
            <Button mini variant="fab" color="primary">
                <AddIcon />
            </Button>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Title of Image"
      />
    </Card>
  );
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookCard);