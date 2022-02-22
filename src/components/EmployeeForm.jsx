import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonaldetailOne from "./Forms/PersonaldetailOne";
import Bankdtails from "./Forms/Bankdtails";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Paper } from "@mui/material";
import PersonaldetailsTwo from "./Forms/PersonaldetailsTwo";
import Currentstatus from "./Forms/Currentstatus";
const steps = [
  "Personal Details",
  "Bank Details",
  "Personal Details",
  "Current Status",
  "Experience Details",
  "Educational Details",
];

export default function EmployeeForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [employedetails, setemployedetails] = React.useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
  });

  const getContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <PersonaldetailOne details={employedetails} />;
        break;
      case 1:
        return <Bankdtails />;
        break;
      case 2:
        return <PersonaldetailsTwo />;
        break;
      case 3:
        return <Currentstatus />;
        break;

      default:
        break;
    }
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Paper sx={{ width: "80%", margin: "auto", padding: "20px" }}>
      <Box sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
              ></StepButton>
              <br />
              <p>{label}</p>
            </Step>
          ))}
        </Stepper>
        <div>
          <React.Fragment>
            <form style={{ margin: "10px" }}>
              {getContent(activeStep)}
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  color="inherit"
                  disabled
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  Remove
                </Button>
                <Box>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, color: "blue", borderColor: "blue" }}
                    variant="outlined"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleReset}
                    sx={{ color: "red", borderColor: "red", mr: 1 }}
                  >
                    Exit
                  </Button>

                  <Button
                    sx={{ mr: 1 }}
                    onClick={handleNext}
                    disabled={activeStep === 5}
                    variant="contained"
                  >
                    Next
                  </Button>
                </Box>

                <Button variant="contained" disabled={activeStep < 5}>
                  Submit
                </Button>
              </Box>
            </form>
          </React.Fragment>
        </div>
      </Box>
    </Paper>
  );
}
