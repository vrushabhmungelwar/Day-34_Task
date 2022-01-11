import "./App.css";
import { MovieList } from "./MovieList";
import { Switch, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { AddMovie } from "./AddMovie";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";

export default function App() {
  const history = useHistory();

  return (
    <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
      <div className="App">
        <AppBar position="static" style={{ marginBottom: "24px" }}>
          <Toolbar variant="dense">
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/")}
            >
              Home
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/movies")}
            >
              Movies
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/add-movies")}
            >
              Add Movies
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/add-movies">
            <AddMovie />
          </Route>
        </Switch>
      </div>
    </Paper>
  );
}
