import React from 'react'
import { Loader } from '../Common/loader';
import { useSelector } from 'react-redux';
import { Box, Stack } from '@mui/material';
import Vector from '../../Assets/Images/vector.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { AboutMe, FullName, TitleText } from '../EducatorOnBoarding/styles';
import { BioData, LinkTag, SocialMedia, SocialMediaContainer, SocialMediaText } from './styles';

export const EducatorProfiles = () => {
    const userData = useSelector((state) => state.userData.data);
    const loading = useSelector((state) => state.userData.loading);
    const aboutMe = userData?.educator?.profile?.about_me
    const profile = userData?.educator?.profile
    const youtube = profile?.youtube
    const linkedin = profile?.linkedin
    const twitter = profile?.twitter
    const website = profile?.website
    const profilePicture = userData?.educator?.profile?.avatar
    const firstName =
        userData?.account?.first_name.charAt(0).toUpperCase() +
        userData?.account?.first_name.slice(1);
    const lastName =
        userData?.account?.last_name.charAt(0).toUpperCase() +
        userData?.account?.last_name.slice(1);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Box
                    height={"auto"}
                    pt={{ lg: 8, md: 6, sm: 3, xs: 2 }}
                >
                    <Grid
                        container
                        display={"flex"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Grid
                            lg={7}
                            md={12}
                            sm={12}
                            xs={12}
                            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
                            mb={6}
                            display={{ lg: "flex" }}
                            flexDirection={"column"}
                            justifyContent={"flex-start"}
                            alignItems={"flex-start"}
                            order={{ lg: 1, md: 2, sm: 2, xs: 2 }}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                sx={{ width: "100%" }}
                            >
                                <TitleText color={"primary"} pb={2}>
                                    Educator
                                </TitleText>
                                <FullName color={"secondary"}>
                                    {firstName} {lastName}
                                </FullName>
                                <AboutMe pt={10} color={"primary"} pb={2}>
                                    About Me
                                </AboutMe>
                                <BioData dangerouslySetInnerHTML={{ __html: aboutMe }} />
                            </Box>
                        </Grid>
                        <Grid
                            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
                            lg={5}
                            md={12}
                            sm={12}
                            xs={12}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
                        >
                            <Box
                                maxWidth={{ md: "70%", lg: "100%", xlg: "100%" }}
                            >
                                <Stack direction="row" spacing={2}>
                                    <Box position="relative">
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={profilePicture || Vector}
                                                height={200}
                                                width={200}
                                                alt="Preview"
                                            />
                                        </Box>
                                    </Box>
                                </Stack>
                                <SocialMediaContainer gap={1} mt={3}>
                                    {website && <LinkTag href={website} target='_blank' rel="noreferrer">
                                        <SocialMedia>
                                            <InsertLinkIcon fontSize='small' />
                                            <SocialMediaText>
                                                Website
                                            </SocialMediaText>
                                        </SocialMedia>
                                    </LinkTag>
                                    }
                                    {youtube && <LinkTag href={youtube} target='_blank' rel="noreferrer">
                                        <SocialMedia>
                                            <YouTubeIcon fontSize='small' />
                                            <SocialMediaText>
                                                Youtube
                                            </SocialMediaText>
                                        </SocialMedia>
                                    </LinkTag>
                                    }
                                    {twitter && <LinkTag href={twitter} target='_blank' rel="noreferrer">
                                        <SocialMedia>
                                            <TwitterIcon fontSize='small' />
                                            <SocialMediaText>
                                                Twitter
                                            </SocialMediaText>
                                        </SocialMedia>
                                    </LinkTag>
                                    }
                                    {linkedin && <LinkTag href={linkedin} target='_blank' rel="noreferrer">
                                        <SocialMedia>
                                            <LinkedInIcon fontSize='small' />
                                            <SocialMediaText>
                                                Linkedin
                                            </SocialMediaText>
                                        </SocialMedia>
                                    </LinkTag>
                                    }
                                </SocialMediaContainer>
                            </Box>
                        </Grid>
                    </Grid>
                </Box >
            )}
        </>
    )
}
