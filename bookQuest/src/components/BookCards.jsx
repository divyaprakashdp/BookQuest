import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function BookCards(props) {
  console.log(props);
  let booksCard = props.bookData.map((book) => (
    <Card
      sx={{
        maxWidth: "100%",
        width: 220,
        height: 360,
        backgroundColor: "#BC8F8F",
      }}
      key={book.id}
    >
      <CardActionArea href={`overview/${book.volumeInfo.title}`}>
        <CardMedia
          component="img"
          width={"140px"}
          height="280"
          sx={{ maxWidth: "100%", objectFit: "scale-down" }}
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={"#8B4513"}
          >
            {book.volumeInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
  return booksCard;
}
