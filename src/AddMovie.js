import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "./global-constants";

export const formValidationSchema = yup.object({
  name: yup.string().required("why not fill this name? 😊"),
  genre: yup.string().required("why not fill this name? 😊"),

  poster: yup
    .string()
    .required("why not fill this poster? 😊")
    .min(4, "Need a bigger poster 😒"),
  rating: yup
    .number()
    .required("why not fill this rating? 😊")
    .min(0, "Need a bigger rating 😒")
    .max(10, "too much rating 😅"),
  summary: yup
    .string()
    .required("why not fill this summary? 😊")
    .min(20, "Need a bigger summary 😒"),
  trailer: yup
    .string()
    .required("why not fill this trailer? 😊")
    .min(4, "Need a bigger trailer 😒"),
});

export function AddMovie() {
  const history = useHistory();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        genre: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        newMovie = [newMovie];
        console.log("onSubmit", newMovie);
        addMovie(newMovie);
      },
    });

  const addMovie = (newMovie) => {
    console.log(newMovie);
    fetch(`${API_URL}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Name"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard"
      />
      <TextField
        id="genre"
        name="genre"
        value={values.genre}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Genre"
        error={errors.genre && touched.genre}
        helperText={errors.genre && touched.genre && errors.genre}
        variant="standard"
      />
      <TextField
        id="poster"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Poster"
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster && errors.poster}
        variant="standard"
      />

      <TextField
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Rating"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}
        variant="standard"
      />

      <TextField
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Summary"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary && errors.summary}
        variant="standard"
      />

      <TextField
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Trailer"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
        variant="standard"
      />

      <Button type="submit" variant="outlined">
        Add movie
      </Button>
    </form>
  );
}
