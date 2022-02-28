import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import { FormProvider, useForm } from "react-hook-form";
import { Paper } from "@mui/material";

import Bankdtails from "./Forms/Bankdtails";

import Currentstatus from "./Forms/Currentstatus";
import ExperienceDetails from "./Forms/ExperienceDetails";
import EductionDetails from "./Forms/EductionDetails";
import Professionaldetails from "./Forms/Professionaldetails";
import PersonalDetail from "./Forms/Personaldetail";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetails,
  selectDetails,
  updateDetails,
} from "./redux/actionCreator";
import { Link, useNavigate } from "react-router-dom";
import { UPDATE_DETAILS } from "./redux/actionType";

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
  const { employee } = useSelector((state) => state);

  let intialvalue = {
    firstName: " ",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    accountNumber: "",
    ifsc: "",
    panCard: "",
    adharCard: "",
    year: "",
    month: "",
    skills: [],
    company: "Albiorix Technology Private Limited",
    designation: "",
    department: "",
    ctc: "",
    workingForm: "",
    Experiencedetails: [
      {
        E_company: "",
        E_designation: "",
        E_department: "",
        E_ctc: "",
        from: "",
        To: "",
      },
    ],

    Eductiondetails: [{ course: "", university: "", passOn: "", grade: "" }],
  };
  intialvalue = employee || intialvalue;
  const method = useForm({
    defaultValues: intialvalue,
  });

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <PersonalDetail />;
        break;
      case 1:
        return <Bankdtails />;
        break;
      case 2:
        return <Professionaldetails />;
        break;
      case 3:
        return <Currentstatus />;
        break;
      case 4:
        return <ExperienceDetails />;
        break;
      case 5:
        return <EductionDetails />;
        break;

      default:
        break;
    }
  };
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const handle = (data) => {
    if (employee.id) {
      dispatch(updateDetails(data));
      dispatch(selectDetails({}));
      back();
    } else {
      dispatch(addDetails(data));
      back();
    }
  };
  const dispatch = useDispatch();
  const handleNext = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep == 5) {
      handle(data);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onSave = () => {
    const values = method.getValues();
    handle(values);
  };
  return (
    <Paper sx={{ width: "80%", margin: "auto", padding: "20px" }}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={(label, index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <React.Fragment>
          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  sx={{ mr: 1 }}
                  variant="contained"
                  onClick={() => onSave()}
                >
                  save
                </Button>
                <Box>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    sx={{ mr: 1, color: "blue", borderColor: "blue" }}
                    variant="outlined"
                  >
                    Previous
                  </Button>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      sx={{ color: "red", borderColor: "red", mr: 1 }}
                    >
                      Exit
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={activeStep >= 5}
                  >
                    Next
                  </Button>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={activeStep < 5}
                  sx={{ mr: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </FormProvider>
        </React.Fragment>
      </Box>
    </Paper>
  );
}
