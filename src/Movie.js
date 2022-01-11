import { Card, CardActions, CardContent } from "@mui/material";

export function Movie({ name, poster, rating, summary, id }) {
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}</h3>

          <p className="movie-Rating" style={styles}>
            ⭐{rating}
          </p>
        </div>

        <p className="movie-summary">{summary}</p>
        <CardActions></CardActions>
      </CardContent>
    </Card>
  );
}
