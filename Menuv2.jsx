import { AppBar, Box, Button, Container, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";


const MyMenu2 = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Box
                        sx={{
                            width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", mx: 2
                        }}
                    >
                        <IconButton
                            component={Link}
                            to={"votarRuAvalie"}>
                            <HowToVoteIcon sx={{ mr: 1, fontSize: "30px", color: "#FFFFFF" }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontFamily: "monospace",
                                    fontWeight: 400,
                                    mr: 5
                                }}
                            >
                                Vote
                            </Typography>
                        </IconButton>

                        <IconButton
                            component={Link}
                            to={"resultadosRuAvalie"}>
                            <LeaderboardIcon sx={{ mr: 1, fontSize: "30px", color: "#FFFFFF" }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontFamily: "monospace",
                                    fontWeight: 400,
                                    mr: 5
                                }}
                            >
                                Resultados
                            </Typography>
                        </IconButton>

                        <SettingsIcon sx={{ mr: 1, fontSize: "30px" }} />
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: "none",
                                color: "white",
                                fontFamily: "monospace",
                                fontWeight: 400,
                                mr: 5
                            }}
                        >
                            Ajuste
                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu2