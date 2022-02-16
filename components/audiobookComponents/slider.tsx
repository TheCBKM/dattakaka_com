import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import styles from "../../styles/books.module.css"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { SampleCollection1 } from "../../data/audio/sample"






const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [

    {
        id: "1",
        imgPath:
            './images/Bookimg1.webp',
    },
    {
        id: "2",
        imgPath:
            './images/Bookimg2.webp',
    },
    {
        id: "3",
        imgPath:
            './images/Bookimg3.webp',
    },

    {
        id: "4",
        imgPath:
            './images/Bookimg4.webp',
    }
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {/* /*{images.map((step, index) => ( */}
                <div >
                    {/* {Math.abs(activeStep - index) <= 2 ? ( */}
                    <Box
                        className={styles.bookImageBox}
                        component="img"
                        sx={{
                            height: 400,
                            display: 'block',
                            maxWidth: 450,
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src={SampleCollection1.image}
                        alt={SampleCollection1.description}
                    />
                    {/* ) : null} */}
                </div>
                {/*              ))}*/}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;