import React, { useEffect, useState } from "react"  
import Button from "@mui/material/Button"  
import { Box } from "@mui/system"  
import CastForEducationIcon from "@mui/icons-material/CastForEducation"  
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"  
import { Divider, Typography } from "@mui/material"  
import { useNavigate } from "react-router-dom"  
import Grid from "@mui/material/Grid"  
import { MyBox, styles } from "./styles"  
import { getAuth } from "firebase/auth"  
import { getDatabase, off, onValue, ref } from "firebase/database"  

const WelcomeBox = () => {
  const auth = getAuth()  
  const db = getDatabase()  
  const uid = auth?.currentUser?.uid  
  const userRef = ref(db, `users/${uid}/educator`)

  const navigate = useNavigate()  
  const [isClicked, setIsClicked] = useState(true)
  const [userData, setUserData] = useState()
  console.log('data',userData)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const callback = (snapshot) => {
          const data = snapshot.val()  
          if (data) {
            setUserData(data)  
            off(userRef, "value", callback)  
          }
        }
        onValue(userRef, callback)  
        return () => {
          off(userRef, "value", callback)  
        }
      } catch (error) {}
    }  

    fetchUserProfile()  
  }, [userRef])  

  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setIsClicked(true)  
    } else {
      setIsClicked(false)  
    }
  }  
  const navigateToBecomeEdu = () => {
    navigate("/educator-account")  
  }  

  const navigateToCourses = () => {
    navigate("/courses")  
  }  
  return (
    <>
      <Grid container item sx={styles.mainGrid}>
        <MyBox sx={styles.item}>
          <Grid
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              onClick={(e) => handleButtonClick({ value: 1 })}
              sx={styles.subGrid}
            >
              {isClicked ? (
                <CastForEducationIcon sx={styles.subGridIconClicked} />
              ) : (
                <CastForEducationIcon sx={styles.subGridIconNotClicked} />
              )}
              <Box>
                <Typography variant="body5">Teach</Typography>
                {isClicked ? (
                  <Divider sx={styles.dividerAfterClick} />
                ) : (
                  <Divider sx={styles.dividerbeforeClick} />
                )}
              </Box>
            </Grid>
            <Divider sx={styles.dividerStyle} />
            <Grid
              onClick={(e) => handleButtonClick({ value: 2 })}
              sx={styles.subGrid}
            >
              {isClicked ? (
                <LocalLibraryIcon sx={styles.subGridIconNotClicked} />
              ) : (
                <LocalLibraryIcon sx={styles.subGridIconClicked} />
              )}
              <Box>
                <Typography variant="body5">Learn</Typography>
                {isClicked ? (
                  <Divider sx={styles.dividerbeforeClick} />
                ) : (
                  <Divider sx={styles.dividerAfterClick} />
                )}
              </Box>
            </Grid>
          </Grid>
          {isClicked ? (
            <>
              <Typography variant="body2">
                Become an Educator <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={styles.boxDescription}>
                Teach live online classes on any subject matter of your
                expertise. Keep 100% of the earnings.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body2">
                Enroll in a Course <br /> on the Vulcan Platform
              </Typography>
              <Typography variant="body5" sx={styles.boxDescription}>
                Learn directly from subject matter experts in live classes.
                Courses available soon.
              </Typography>
            </>
          )}

          <Box display="flex" justifyContent="center" mt={6} height={40}>
            {isClicked ? (
              <Button
                onClick={navigateToBecomeEdu}
                variant="contained"
                sx={styles.textCapitalize}
              >
                Sign Up To Teach
              </Button>
            ) : (
              <Button
                onClick={navigateToCourses}
                variant="contained"
                sx={styles.textCapitalize}
              >
                See Courses
              </Button>
            )}
          </Box>
        </MyBox>
      </Grid>
    </>
  )  
}  

export default WelcomeBox  
