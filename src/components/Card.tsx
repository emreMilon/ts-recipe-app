import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useAppSelector } from "../store/typedHooks";
import moment from "moment";
import "./styles.css";

let DateGenerator = require("random-date-generator");
let startDate = new Date(2017, 2, 2);
let today = new Date();
let endDate = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate()
);
let basicImgUrl =
  "https://www.dreamstime.com/stock-photo-various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-image97076702";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface CardProps {
  title: string[];
}

let number = Math.floor(Math.random() * 5);

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard: React.FC<CardProps> = ({ title }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  const recipes = useAppSelector((state) => state.recipe.data);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
      {recipes &&
        recipes.hits.map((item) => (
          <div className="card-item" key={item.recipe.calories}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {title[number].charAt(0)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.recipe.label}
                subheader={moment(
                  DateGenerator.getRandomDateInRange(startDate, endDate)
                ).format("DD/MM/YYYY")}
              />
              <CardMedia
                component="img"
                height="200"
                image={item.recipe.image ? item.recipe.image : basicImgUrl}
                alt={item.recipe.label}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.recipe.healthLabels.map((x) => (
                    <span key={x}> #{x} </span>
                  ))}
                </Typography>
                <div className="card-item-times">
                  <Typography variant="body2" color="text.secondary">
                    {item.recipe.totalTime > 0
                      ? `${item.recipe.totalTime} Minutes`
                      : null}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.recipe.calories
                      ? `${Math.round(item.recipe.calories)} Calories`
                      : null}
                  </Typography>
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon
                    style={fav ? { fill: "#FF0000" } : { fill: "#eeeeee" }}
                    onClick={() => setFav(!fav)}
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <a href={item.recipe.shareAs}>
                    {" "}
                    <ShareIcon />{" "}
                  </a>
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Ingredidents:</Typography>
                  <ul>
                    {item.recipe.ingredientLines.map((ing, i) => (
                      <li key={i}>
                        <Typography paragraph>{ing}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography>
                    {recipes.more
                      ? "Set aside off of the heat to let rest for and then serve."
                      : null}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        ))}
      <h1>Welcome to Delious Recipices</h1>
    </div>
  );
};

export default RecipeReviewCard;
