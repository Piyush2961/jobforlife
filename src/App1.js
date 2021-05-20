import {
    AppBar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    IconButton,
    TextField,
    Toolbar,
    Typography
  } from "@material-ui/core";
  import { useState } from "react";
  import { config } from "./data.config";
  import "./styles.css";
  import parse from "html-react-parser";
  import MenuIcon from "@material-ui/icons/Menu";
  import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
  export default function App1() {
    const [mylist, setMyList] = useState([]);
    const [search, setSearch] = useState("");
    return (
      <div className="App1">
        {/* <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={``}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
           
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar> */}
        <div className="container" >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              const targetURL = `${config.BASE_URL}/${"gb"}/${
                config.BASE_PARAMS
              }&app_id=${config.APP_ID}&app_key=${
                config.API_KEY
              }&what=${search}&where=${"london"}`;
              console.log(targetURL);
              fetch(targetURL)
                .then((res) => res.json())
                .then((json) => {
                  console.log(json);
                  setMyList(json.results);
                });
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <TextField
              id="standard-basic"
              label="Job Title"
              className={`my-field`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              disableElevation
              type="submit"
              
            >
              Search
            </Button>
          </form>
          <br />
          <br />
          {mylist.map(
            ({
              id,
              title,
              description,
              salary_min,
              salary_max,
              company,
              redirect_url
            }) => {
              return (
                <>
                  <Card key={id} className={`my-card`} variant="outlined">
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          className={``}
                          variant="small"
                          color="textSecondary"
                        >
                          {company.display_name}
                        </Typography>
                        <Typography
                          className={`mt-2`}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {parse(title)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {parse(description)}
                        </Typography>
                        <Typography
                          className={`mt-2`}
                          variant="subtitle1"
                          color="textSecondary"
                        >
                          <strong>
                            £{salary_min} - £{salary_max}
                          </strong>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a href={redirect_url}>
                        <Button size="small" color="primary">
                          Learn More{" "}
                          <ArrowForwardIcon
                            className={`pos`}
                            style={{ fontSize: "1.1rem", marginLeft: "0.4rem" }}
                          />
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                  <br />
                </>
              );
            }
          )}
        </div>
      </div>
    );
  }
  